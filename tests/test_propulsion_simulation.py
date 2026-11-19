"""
tests/test_propulsion_simulation.py
Unit and Acceptance Tests for RMS Titanic Propulsion and Steam Plant Simulation
"""

import pytest
from simulation.engine_simulation import TitanicEngineSystem

def test_initial_stopped_state():
    """Verify initial cold/stopped state."""
    sim = TitanicEngineSystem()
    status = sim.get_status_dict()
    assert status['order'] == 'STOP'
    assert status['speed_knots'] == 0.0
    assert status['port_recip_rpm'] == 0.0
    assert status['stbd_recip_rpm'] == 0.0
    assert status['turbine_rpm'] == 0.0
    assert status['changeover_valves_to_turbine'] is False
    assert status['funnel_smoke'][4]['is_dummy'] is True
    assert status['funnel_smoke'][4]['density'] == 0.0

def test_full_ahead_performance():
    """Verify full ahead propulsion synchronisation and power delivery."""
    sim = TitanicEngineSystem()
    sim.set_order('FULL_AHEAD')

    # Step simulation forward 60 seconds
    for _ in range(60):
        sim.update(1.0)

    status = sim.get_status_dict()
    assert status['speed_knots'] == pytest.approx(21.5, 0.5)
    assert status['port_recip_rpm'] == pytest.approx(75.0, 1.0)
    assert status['stbd_recip_rpm'] == pytest.approx(75.0, 1.0)
    assert status['turbine_rpm'] == pytest.approx(165.0, 2.0)
    assert status['total_power_hp'] == pytest.approx(46000.0, 2000.0)
    assert status['changeover_valves_to_turbine'] is True

    # Smoke emission from active funnels
    for f in [1, 2, 3]:
        assert status['funnel_smoke'][f]['active'] is True
        assert status['funnel_smoke'][f]['density'] > 0.8
        assert status['funnel_smoke'][f]['is_dummy'] is False

    # STRICT ENFORCEMENT: Funnel 4 must have 0 coal smoke!
    assert status['funnel_smoke'][4]['density'] == 0.0
    assert status['funnel_smoke'][4]['active'] is False
    assert status['funnel_smoke'][4]['is_dummy'] is True

def test_astern_turbine_bypass():
    """Verify that during astern maneuvers, Parsons turbine is completely bypassed."""
    sim = TitanicEngineSystem()
    sim.set_order('FULL_ASTERN')

    for _ in range(60):
        sim.update(1.0)

    status = sim.get_status_dict()
    # Reciprocating engines run in reverse
    assert status['port_recip_rpm'] == pytest.approx(-75.0, 1.0)
    assert status['speed_knots'] < 0.0
    # Turbine does NOT have astern blading -> must remain stopped with valves bypassed!
    assert status['turbine_rpm'] == 0.0
    assert status['changeover_valves_to_turbine'] is False

def test_piston_kinematics():
    """Verify 4-crank piston stroke positions across 360-degree rotation."""
    sim = TitanicEngineSystem()
    p_0 = sim.get_piston_positions(0.0)
    assert p_0['HP'] == pytest.approx(1.0, 0.05) # Top dead center
    assert p_0['LP1'] == pytest.approx(0.0, 0.05) # Bottom dead center
    assert 0.0 <= p_0['IP'] <= 1.0
    assert 0.0 <= p_0['LP2'] <= 1.0
