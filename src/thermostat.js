
'use strict'; // strict mode (as opposed to 'sloppy') highlights 'hidden' errors as actual errors etc

function Thermostat() { // 'Object constructor'. Allows us to make instances of Thermostat object via new Thermostat()
  this.temperature = 20; // 'Property'. 'this' tells JS interpreter that temperature belongs to Thermostat
} // This is a Thermostat 'object constructor'

Thermostat.prototype.getCurrentTemp = function(){ // 'Prototype' i.e. storage area for object. It 'associate/bind' getCurrentTemp to Thermostat
  return this.temperature
}

Thermostat.prototype.up = function(){
  this.temperature += 1
}

Thermostat.prototype.down = function(){
  this.temperature -= 1
}
