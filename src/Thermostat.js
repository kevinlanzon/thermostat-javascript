var Thermostat  = function() {
  this.currentTemperature = 20;
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.currentTemperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  this.currentTemperature -= degrees;
};