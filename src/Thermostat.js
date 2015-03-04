var Thermostat  = function() {
  this.defaultTemperature = 20;
  this.PSM = true;
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.defaultTemperature += degrees;
  if(this.PSM) {this.defaultTemperature = Math.min(25, this.defaultTemperature);}
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  this.defaultTemperature -= degrees;
  this.defaultTemperature = Math.max(10, this.defaultTemperature);
};

Thermostat.prototype.PSMonOff = function(mode) {
  this.PSM = false;
};

Thermostat.prototype.resetButton = function() {
  this.defaultTemperature = 20;
};