var Thermostat  = function() {
  this.currentTemperature = 20;
  this.powerSaveOn = 25;
  this.powerSaveOFF = 32;
  this.PSM = true;
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.currentTemperature += degrees;
  this.currentTemperature = (this.PSM) ? Math.min(25, this.currentTemperature) : Math.min(32, this.currentTemperature);
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  this.currentTemperature -= degrees;
  this.currentTemperature = Math.max(10, this.currentTemperature);
};

Thermostat.prototype.PSMoff = function() {
  this.powerSaveOFF = this.currentTemperature;
  this.PSM = false;
};

Thermostat.prototype.PSMon = function() {
  this.currentTemperature = this.powerSaveOn;
  this.PSM = true;
};

Thermostat.prototype.resetButton = function() {
  this.currentTemperature = 20;
};