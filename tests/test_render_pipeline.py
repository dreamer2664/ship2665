"""
tests/test_render_pipeline.py
Unit and Acceptance Tests for Automated Render Pipeline and Retention Policy
"""

import os
import json
import pytest
from scripts.render_pipeline import calculate_prune_targets, execute_retention_cleanup, FINAL_DIR, RENDERS_DIR

def test_retention_policy_under_10_generations():
    """Rule 1: Retain generations 1 to 9 intact; delete nothing."""
    gens_1_to_9 = list(range(1, 10))
    to_prune = calculate_prune_targets(gens_1_to_9)
    assert to_prune == []

def test_retention_policy_at_generation_10():
    """Rule 2: When Generation 10 is reached, prune gen 1 to 5, keeping gen 6-10 (newest 5)."""
    gens_1_to_10 = list(range(1, 11))
    to_prune = calculate_prune_targets(gens_1_to_10)
    assert to_prune == [1, 2, 3, 4, 5]

def test_retention_policy_over_10_generations():
    """Rule 3: When gen > 10, retain only the newest 5 generations."""
    gens_1_to_12 = list(range(1, 13))
    to_prune = calculate_prune_targets(gens_1_to_12)
    # Newest 5 are [8, 9, 10, 11, 12] -> prune 1 to 7
    assert to_prune == [1, 2, 3, 4, 5, 6, 7]

def test_final_renders_directory_and_manifest():
    """Verify renders/final/ contains the approved manifest and required camera views."""
    assert os.path.exists(FINAL_DIR)
    manifest_path = os.path.join(FINAL_DIR, 'manifest.json')
    assert os.path.exists(manifest_path)

    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    assert manifest['total_views'] >= 22
    assert 'generation' in manifest
    assert 'resolution' in manifest

    required_views = [
        'port_bow', 'starboard_bow', 'broadside_port', 'broadside_starboard',
        'stern_propellers', 'aerial_three_quarter', 'waterline_low',
        'bridge_navigating', 'wheelhouse_navigating', 'boat_deck_davits',
        'funnels_rigging', 'grand_staircase_dome', 'grand_staircase_clock',
        'dining_saloon_1st', 'smoking_room_1st', 'cafe_parisien',
        'gymnasium_interior', 'marconi_wireless_room', 'steerage_dining_saloon',
        'scotland_road_passage', 'passenger_lifts', 'turkish_baths_pool',
        'boiler_room_6', 'reciprocating_engine_room', 'turbine_room',
        'dynamo_room', 'steering_gear_tiller', 'watertight_doors_cutaway',
        'longitudinal_cutaway', 'closeup_welin_davit', 'closeup_engine_valve_gear'
    ]

    for v in required_views:
        img_path = os.path.join(FINAL_DIR, f"{v}.png")
        assert os.path.exists(img_path), f"Missing required render {img_path}"
        assert os.path.getsize(img_path) > 1000 # Valid non-empty image
