"""
tests/test_evidence_ledger.py
Unit and Acceptance Tests for RMS Titanic Historical Evidence Ledger and Archival Audit Trail
"""

import os
import json
import pytest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEDGER_PATH = os.path.join(REPO_ROOT, 'evidence', 'evidence_ledger.json')
SPECS_PATH = os.path.join(REPO_ROOT, 'models', 'ship_specs.json')

def test_evidence_ledger_integrity():
    """Verify evidence ledger JSON structure, required fields, and valid confidence ratings."""
    assert os.path.exists(LEDGER_PATH)
    with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
        ledger = json.load(f)

    assert isinstance(ledger, list)
    assert len(ledger) >= 20  # Comprehensive entries covering all major systems

    required_keys = [
        'feature',
        'documented_value',
        'source',
        'source_date',
        'confidence',
        'proxy_type',
        'unresolved_questions'
    ]

    for entry in ledger:
        for k in required_keys:
            assert k in entry, f"Missing key '{k}' in entry {entry.get('feature')}"
        assert 'High' in entry['confidence'] or 'Medium' in entry['confidence'] or 'Low' in entry['confidence']
        assert entry['proxy_type'] in ['Titanic-specific', 'Sister-ship proxy (Olympic)', 'Engineering analysis']
        assert len(entry['source']) > 5
        assert len(entry['documented_value']) > 2

def test_specs_consistency_with_ledger():
    """Verify core numerical parameters in ship_specs.json align with archival evidence."""
    with open(SPECS_PATH, 'r', encoding='utf-8') as f:
        specs = json.load(f)

    # Core naval architecture checks
    dim = specs['dimensions']
    assert dim['registered_length_m'] == 259.84 # 852.5 ft
    assert dim['length_overall_m'] == 269.06     # 882.75 ft / 882 ft 9 in
    assert dim['extreme_breadth_m'] == 28.19    # 92.5 ft
    assert dim['full_load_displacement_tons'] == 52310
    assert dim['design_draught_m'] == 10.54     # 34 ft 7 in

    # Propulsion specs
    prop = specs['propulsion']
    assert prop['boilers']['total_boilers'] == 29
    assert prop['boilers']['double_ended'] == 24
    assert prop['boilers']['single_ended'] == 5
    assert prop['boilers']['total_furnaces'] == 159
    assert prop['boilers']['working_pressure_psi'] == 215

    # Funnels specs
    funnels = specs['funnels']
    assert len(funnels) == 4
    active_funnels = [f['number'] for f in funnels if f['smoke_emitter']]
    assert active_funnels == [1, 2, 3]
    dummy_funnel = [f['number'] for f in funnels if f['is_dummy']]
    assert dummy_funnel == [4]

    # Watertight subdivision
    assert len(specs['bulkheads']) == 15
    assert len(specs['compartments']) == 16
