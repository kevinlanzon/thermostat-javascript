var Thermostat  = function() {
  this.currentTemperature = 20;
  this.powerSaveOn = 25;
  this.powerSaveOFF = 32;
  this.PSM = true;
  this.energyUsageBreakpoint = 18;
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
  this.PSM = true;
  this.powerSaveOFF = this.powerSaveOn;
  if(this.currentTemperature > this.powerSaveOn) this.currentTemperature =this.powerSaveOn
  this.PSM = true;
};

Thermostat.prototype.resetButton = function() {
  this.currentTemperature = 20;
};

Thermostat.prototype.energyRating = function() {
  if(this.currentTemperature < this.energyUsageBreakpoint) {
    return "low-usage";
  }
  else if(this.currentTemperature < this.powerSaveOn && this.currentTemperature >= this.energyUsageBreakpoint) {
    return "medium-usage";
  }
  else {
    return "high-usage";
  }
};