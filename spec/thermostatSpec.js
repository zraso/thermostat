// 'use strict';

("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature of thermostat', function(){
    it('starts at 20 degrees', function() {
      expect(thermostat.currentTemp()).toEqual(20);
    });
  });

  describe('the up function', function(){
    it('increases the temperature by 1', function(){
      thermostat.up;
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });
});
