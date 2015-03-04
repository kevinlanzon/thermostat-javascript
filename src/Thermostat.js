var Thermostat  = function() {
  this.currentTemperature = 20;
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.currentTemperature += degrees;
};