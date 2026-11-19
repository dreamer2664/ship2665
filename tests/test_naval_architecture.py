"""
tests/test_naval_architecture.py
Unit and Acceptance Tests for RMS Titanic Naval Architecture Specifications
Harland & Wolff Yard No. 401 — Maiden Voyage Configuration (April 1912)
"""

import pytest
import os
import json
from models.naval_architecture import (
    LOA_METERS, LBP_METERS, REGISTERED_LEN_M, EXTREME_BEAM_M, MOULDED_BEAM_M,
    DESIGN_DRAUGHT_M, DISPLACEMENT_TONS, GRT, NRT,
    DECK_ELEVATIONS, BULKHEADS, COMPARTMENTS, FUNNELS, LIFEBOATS,
    get_sheer_y, get_hull_half_breadth
)

def test_principal_dimensions():
    """Verify primary hull dimensions match Harland & Wolff 1911-1912 specifications."""
    assert LOA_METERS == pytest.approx(269.06, 0.01) # 882 ft 9 in
    assert REGISTERED_LEN_M == pytest.approx(259.84, 0.01) # 852.5 ft registered
    assert LBP_METERS == pytest.approx(259.08, 0.01) # 850 ft between perpendiculars
    assert EXTREME_BEAM_M == pytest.approx(28.19, 0.01) # 92 ft 6 in
    assert MOULDED_BEAM_M == pytest.approx(28.04, 0.01) # 92 ft 0 in
    assert DESIGN_DRAUGHT_M == pytest.approx(10.54, 0.01) # 34 ft 7 in
    assert DISPLACEMENT_TONS == 52310
    assert GRT == 46328
    assert NRT == 21831

def test_watertight_subdivisions():
    """Verify 15 watertight bulkheads (A to P) and 16 main compartments."""
    assert len(BULKHEADS) == 15
    assert len(COMPARTMENTS) == 16

    bulkhead_ids = [b['id'] for b in BULKHEADS]
    expected_ids = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
    assert bulkhead_ids == expected_ids

    # Bulkhead A extends to C Deck (Collision bulkhead)
    assert BULKHEADS[0]['extends_to'] == 'C_Deck'
    # Bulkhead B extends to D Deck
    assert BULKHEADS[1]['extends_to'] == 'D_Deck'
    # Bulkheads C through J extend to E Deck
    for bh in BULKHEADS[2:9]:
        assert bh['extends_to'] == 'E_Deck'
    # Bulkheads K through P extend to D Deck
    for bh in BULKHEADS[9:]:
        assert bh['extends_to'] == 'D_Deck'

def test_deck_elevations_and_sheer():
    """Verify deck vertical elevations and sheer curve."""
    assert DECK_ELEVATIONS['Keel'] == 0.00
    assert DECK_ELEVATIONS['TankTop'] == 1.60 # 63 in amidships
    assert DECK_ELEVATIONS['C_Deck'] == 18.50 # Lowest point of sheer
    assert DECK_ELEVATIONS['Boat_Deck'] == 27.30
    assert DECK_ELEVATIONS['Funnel_Tops'] == pytest.approx(53.34, 0.01) # 175 ft above keel
    assert DECK_ELEVATIONS['Fore_Mast_Truck'] == pytest.approx(63.40, 0.01) # 208 ft
    assert DECK_ELEVATIONS['Main_Mast_Truck'] == pytest.approx(61.57, 0.01) # 202 ft

    # Sheer curve increases towards stemhead and stern
    sheer_mid = get_sheer_y(130.0)
    sheer_bow = get_sheer_y(260.0)
    sheer_stern = get_sheer_y(-2.0)
    assert sheer_mid == pytest.approx(0.0, 0.01)
    assert sheer_bow > 2.5 # Rises ~2.8m at bow
    assert sheer_stern > 1.0 # Rises ~1.4m at stern

def test_hull_breadth_envelope():
    """Verify hull half-breadths match parallel middle body, entrance, and run."""
    # Midships full breadth at design waterline
    mid_half = get_hull_half_breadth(130.0, DESIGN_DRAUGHT_M)
    assert mid_half == pytest.approx(MOULDED_BEAM_M / 2.0, 0.1)

    # Bow station narrows to sharp stem
    bow_half = get_hull_half_breadth(260.0, DESIGN_DRAUGHT_M)
    assert bow_half < 4.0
    stem_half = get_hull_half_breadth(263.8, DESIGN_DRAUGHT_M)
    assert stem_half < 0.5

    # Keel bottom is narrow
    keel_half = get_hull_half_breadth(130.0, 0.1)
    assert keel_half < 1.0

def test_funnel_specifications_and_dummy_rule():
    """Verify 4 funnels with authentic rake and strict Funnel 4 dummy rule."""
    assert len(FUNNELS) == 4
    for fn in FUNNELS:
        assert fn['rake_rad'] == pytest.approx(0.0831, 0.005) # 1:12 rake aft

    # Funnels 1, 2, 3 must be active boiler flues
    for fn in FUNNELS[:3]:
        assert fn['is_dummy'] is False
        assert fn['smoke_emitter'] is True

    # Funnel 4 MUST be a dummy ventilation casing
    funnel_4 = FUNNELS[3]
    assert funnel_4['number'] == 4
    assert funnel_4['is_dummy'] is True
    assert funnel_4['smoke_emitter'] is False
    assert funnel_4['boiler_uptake'] is None

def test_lifeboats_and_davits():
    """Verify 20 lifeboats (14 Class A, 2 cutters, 4 collapsibles) and 16 Welin davit sets."""
    assert len(LIFEBOATS) == 20
    class_a = [b for b in LIFEBOATS if b['type'] == 'Class A Wooden']
    cutters = [b for b in LIFEBOATS if b['type'] == 'Emergency Cutter']
    collapsibles = [b for b in LIFEBOATS if b['type'] == 'Engelhardt Collapsible']

    assert len(class_a) == 14
    assert len(cutters) == 2
    assert len(collapsibles) == 4

    total_capacity = sum(b['capacity'] for b in LIFEBOATS)
    assert total_capacity == 1178 # Documented capacity for 1,178 persons

    # Cutters must be kept swung outboard
    for c in cutters:
        assert c['swung_out'] is True
