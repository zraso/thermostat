'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature of thermostat', function(){
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20)
    });
  });

  describe('should increase temperature', function(){
    it('can increase temperature by 1', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21)
    });
  });

  describe('should decrease temperature', function(){
    it('can decrease temperature by 1', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    });

    it('will not go below minimum temperature', function() {
      for (let i=0; i<12; i++) { thermostat.down(); }
      expect(thermostat.getCurrentTemp()).toEqual(10)
    });
  });

  describe('power saving', function(){
    it('can switch power save on', function(){
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true);
    });

    it('can switch power save off', function(){
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toEqual(false);
    });
  });

  describe('maximum temperature', function(){
    it('will not go higher than current maximum when PS is on', function(){
      for (let i=0; i<7; i++) { thermostat.up(); }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });

    it('will not go higher than current maximum when PS is off', function(){
      thermostat.powerSaveOff()
      for (let i=0; i<14; i++) { thermostat.up(); }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

describe('reset', function(){
  it('returns temperature back to default', function(){
    thermostat.reset()
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP)
  });
});


describe('usage', function(){
  it('reports currenty usage depending on temperature', function(){
    for (let i=0; i<5; i++) { thermostat.down(); }
    expect(thermostat.usage()).toEqual('low-usage');
  });
});

})
