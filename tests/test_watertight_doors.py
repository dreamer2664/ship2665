"""
tests/test_watertight_doors.py
Unit and Acceptance Tests for RMS Titanic Watertight Subdivisions and Door Systems
"""

import pytest
from simulation.watertight_doors import WatertightSystem, WatertightDoor

def test_watertight_doors_initialization():
    """Verify 19 total modeled doors, with 12 lower vertical drop doors on Tank Top."""
    wts = WatertightSystem()
    status = wts.get_status_summary()
    assert status['total_doors'] == 19
    assert status['doors_open'] == 19
    assert status['doors_closed'] == 0
    assert status['bridge_switch_closed'] is False

    lower_doors = [d for d in wts.doors if d.deck_level == 'TankTop']
    assert len(lower_doors) == 12
    for d in lower_doors:
        assert d.has_bridge_release is True

def test_bridge_switch_closure_sequence():
    """Verify 10-second warning bell followed by 25-30 second cataract descent."""
    wts = WatertightSystem()
    wts.trigger_bridge_switch()

    # Immediate: bridge switch closed, warning bell rings
    assert wts.bridge_switch_closed is True
    assert wts.warning_bell_ringing is True

    # After 5 seconds: still alarming, doors haven't dropped yet
    wts.update(5.0)
    for d in wts.doors:
        if d.has_bridge_release:
            assert d.state == 'ALARMING'
            assert d.position == 1.0

    # After 12 seconds total: alarm ended, doors actively closing
    wts.update(7.0)
    for d in wts.doors:
        if d.has_bridge_release:
            assert d.state == 'CLOSING'
            assert d.position < 1.0

    # After 45 seconds total: all 12 lower machinery doors fully closed
    wts.update(33.0)
    summary = wts.get_status_summary()
    assert summary['doors_closed'] == 12
    assert summary['warning_bell_ringing'] is False
    for d in wts.doors:
        if d.has_bridge_release:
            assert d.state == 'CLOSED'
            assert d.position == 0.0

def test_local_emergency_float_trip():
    """Verify bilge float valve trips gravity drop immediately."""
    door = WatertightDoor('WTD-TEST', 'F', 'BR 4', 'TankTop', True)
    door.trigger_float_switch()
    assert door.bilge_float_triggered is True
    assert door.state == 'CLOSING'
    door.update(30.0)
    assert door.state == 'CLOSED'
