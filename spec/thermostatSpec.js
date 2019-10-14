'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature of thermostat', function(){
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20)
    })
  })

  describe('should increase temperature', function(){
    it('can increase temperature by 1', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21)
    })
  })

  describe('should decrease temperature', function(){
    it('can decrease temperature by 1', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    })
  })
})
