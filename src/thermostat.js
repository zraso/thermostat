
'use strict'; // strict mode (as opposed to 'sloppy') highlights 'hidden' errors as actual errors etc

function Thermostat() { // 'Object constructor'. Allows us to make instances of Thermostat object via new Thermostat()
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PS = 25;
  this.MAX_TEMP = 32;
  this.LOW_USAGE_LIMIT = 18;
  this.powerSave = true; // 'Property'. 'this' tells JS interpreter that temperature belongs to Thermostat
} // This is a Thermostat 'object constructor'

Thermostat.prototype.getCurrentTemp = function(){ // 'Prototype' i.e. storage area for object. It 'associate/bind' getCurrentTemp to Thermostat
  return this.temperature
}

Thermostat.prototype.up = function(){
  var max = this.getCurrentMax();
   if (this.temperature < max) {
     this.temperature += 1
  }
}

Thermostat.prototype.down = function(){
  if (this.temperature > this.MIN_TEMP) {
    this.temperature -= 1
  }
}

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
  if (this.temperature > this.MAX_TEMP_PS) {
    this.temperature = this.MAX_TEMP_PS;
  }
}

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
}

Thermostat.prototype.getCurrentMax = function(){
  if (this.powerSave == true) {
    return this.MAX_TEMP_PS
  }
  else {
    return this.MAX_TEMP
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.usage = function() {
  if (this.temperature < this.LOW_USAGE_LIMIT) {
    return 'low-usage';
  }
  else if (this.temperature >= this.LOW_USAGE_LIMIT && this.temperature <= this.MAX_TEMP) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  }
}
