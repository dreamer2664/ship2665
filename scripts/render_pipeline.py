#!/usr/bin/env python3
"""
scripts/render_pipeline.py
Automated Repeatable Render Pipeline and Retention Policy Manager for RMS Titanic (Yard No. 401)
Project SHIP2665 — Section 10 Specification

Retention Policy:
- Retain generations 1 to 9 intact.
- When Generation 10 is successfully rendered and verified, prune only renders/gen1/ through renders/gen5/.
- After that (gen > 10), retain the newest 5 generation folders, deleting older generations only after a new generation succeeds.
- Permanent preservation: renders/final/, all manifests, source files, scripts, references, tests, and approved final renders.
- Safe dry-run support: verify exactly which paths will be pruned before touching disk.
- Never delete anything outside the explicitly enumerated renders/gen<N> directories.
"""

import os
import sys
import re
import json
import shutil
import argparse
import subprocess
from datetime import datetime

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RENDERS_DIR = os.path.join(REPO_ROOT, 'renders')
FINAL_DIR = os.path.join(RENDERS_DIR, 'final')
QA_LOG_FILE = os.path.join(RENDERS_DIR, 'qa_log.json')

def get_existing_generations():
    """Returns sorted list of integer generation numbers currently present on disk."""
    if not os.path.exists(RENDERS_DIR):
        return []
    gens = []
    for d in os.listdir(RENDERS_DIR):
        m = re.match(r'^gen(\d+)$', d)
        if m and os.path.isdir(os.path.join(RENDERS_DIR, d)):
            gens.append(int(m.group(1)))
    return sorted(gens)

def run_render_generation(gen_num):
    """Executes the headless browser renderer for a given generation number."""
    print(f"\n=======================================================")
    print(f"  LAUNCHING RENDER PIPELINE: GENERATION {gen_num}")
    print(f"=======================================================")

    node_script = os.path.join(REPO_ROOT, 'scripts', 'headless_render.js')
    cmd = ['node', node_script, str(gen_num)]
    
    start_time = datetime.now()
    res = subprocess.run(cmd, cwd=REPO_ROOT)
    elapsed = (datetime.now() - start_time).total_seconds()

    if res.returncode != 0:
        print(f"❌ Render generation {gen_num} failed with return code {res.returncode}")
        return False

    gen_dir = os.path.join(RENDERS_DIR, f"gen{gen_num}")
    manifest_path = os.path.join(gen_dir, "manifest.json")

    if not os.path.exists(manifest_path):
        print(f"❌ Generation {gen_num} completed without creating manifest.json!")
        return False

    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    rendered_count = len(manifest.get('views', []))
    print(f"✅ Generation {gen_num} succeeded: {rendered_count} views rendered in {elapsed:.1f}s.")
    return True

def calculate_prune_targets(existing_gens):
    """
    Computes list of generation numbers eligible for pruning based on Section 10 rules:
    - If highest gen < 10: Retain generations 1 to 9 (delete nothing).
    - If highest gen == 10: Prune gen 1 to 5, keeping gen 6, 7, 8, 9, 10 (newest 5).
    - If highest gen > 10: Retain newest 5 generations, prune any older ones.
    """
    if not existing_gens or max(existing_gens) < 10:
        return []

    max_gen = max(existing_gens)
    if max_gen == 10:
        # Delete gen 1 through gen 5
        return [g for g in existing_gens if 1 <= g <= 5]
    else:
        # Keep the newest 5 generations
        newest_5 = sorted(existing_gens)[-5:]
        return [g for g in existing_gens if g not in newest_5]

def execute_retention_cleanup(dry_run=True):
    """Executes or dry-runs the automated retention cleanup policy."""
    gens = get_existing_generations()
    to_prune = calculate_prune_targets(gens)

    print(f"\n--- Retention Policy Assessment ---")
    print(f"Existing Generations: {gens}")
    print(f"Eligible for Pruning: {to_prune}")
    print(f"Dry Run Mode: {dry_run}")

    if not to_prune:
        print("ℹ️ No generations currently exceed retention limits. All generations retained.")
        return []

    pruned = []
    for g in to_prune:
        target_dir = os.path.join(RENDERS_DIR, f"gen{g}")
        # Path safety verification: MUST be inside RENDERS_DIR and match gen\d+
        rel = os.path.relpath(target_dir, RENDERS_DIR)
        if not re.match(r'^gen\d+$', rel):
            raise ValueError(f"Safety abort: Refusing to delete non-conforming directory {target_dir}")

        if dry_run:
            print(f"  [DRY RUN] Would delete: {target_dir}")
        else:
            print(f"  🗑️ Pruning obsolete generation: {target_dir}")
            shutil.rmtree(target_dir)
            pruned.append(g)

    return pruned

def publish_to_final(source_gen):
    """Copies approved generation renders into permanent renders/final/ directory."""
    src_dir = os.path.join(RENDERS_DIR, f"gen{source_gen}")
    if not os.path.exists(src_dir):
        print(f"❌ Source generation {source_gen} does not exist!")
        return False

    os.makedirs(FINAL_DIR, exist_ok=True)
    copied = 0
    for item in os.listdir(src_dir):
        s_path = os.path.join(src_dir, item)
        d_path = os.path.join(FINAL_DIR, item)
        if os.path.isfile(s_path):
            shutil.copy2(s_path, d_path)
            copied += 1

    print(f"✅ Published {copied} files from gen{source_gen} to {FINAL_DIR}")
    return True

def main():
    parser = argparse.ArgumentParser(description="RMS Titanic Automated Render Pipeline")
    parser.add_argument('--gen', type=int, default=None, help="Generation number to render")
    parser.add_argument('--run-series', type=int, default=None, help="Run generations from 1 up to N")
    parser.add_argument('--dry-run-cleanup', action='store_true', help="Test retention cleanup without deleting")
    parser.add_argument('--apply-cleanup', action='store_true', help="Execute retention cleanup")
    parser.add_argument('--publish-final', type=int, default=None, help="Publish specified generation to renders/final/")
    args = parser.parse_args()

    if args.dry_run_cleanup:
        execute_retention_cleanup(dry_run=True)
        return

    if args.apply_cleanup:
        execute_retention_cleanup(dry_run=False)
        return

    if args.publish_final is not None:
        publish_to_final(args.publish_final)
        return

    if args.run_series is not None:
        target_n = args.run_series
        print(f"Executing automated render series from gen 1 to gen {target_n}...")
        for g in range(1, target_n + 1):
            success = run_render_generation(g)
            if not success:
                print(f"Series halted at generation {g} due to failure.")
                sys.exit(1)
            # Evaluate retention policy after each generation
            if g >= 10:
                execute_retention_cleanup(dry_run=False)
        return

    if args.gen is not None:
        gen = args.gen
        success = run_render_generation(gen)
        if success and gen >= 10:
            execute_retention_cleanup(dry_run=False)
    else:
        # Default: determine next generation
        existing = get_existing_generations()
        next_gen = (max(existing) + 1) if existing else 1
        success = run_render_generation(next_gen)
        if success and next_gen >= 10:
            execute_retention_cleanup(dry_run=False)

if __name__ == '__main__':
    main()
