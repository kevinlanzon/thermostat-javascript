var Thermostat  = function() {
  this.currentTemperature = 20;
  this.powerSaveOn = 25;
  this.PSM = true;
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.currentTemperature += degrees;
  if(this.PSM) {this.currentTemperature = Math.min(25, this.currentTemperature);}
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  this.currentTemperature -= degrees;
  this.currentTemperature = Math.max(10, this.currentTemperature);
};

Thermostat.prototype.PSMoff = function() {
  this.PSM = false;
};

Thermostat.prototype.PSMon = function() {
  this.currentTemperature = this.powerSaveOn;
  this.PSM = true;
};

Thermostat.prototype.resetButton = function() {
  this.currentTemperature = 20;
};