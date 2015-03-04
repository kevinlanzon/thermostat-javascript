describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a current temperature of 20 degrees', function() {
    expect(thermostat.defaultTemperature).toEqual(20)
  });

  it('can increase the temperature by 1 degree', function() {
    thermostat.increaseTemperature(1);
    expect(thermostat.defaultTemperature).toEqual(21);
  });

  it('can increase the temperature by 5 degrees', function() {
    thermostat.increaseTemperature(5);
    expect(thermostat.defaultTemperature).toEqual(25);
  });

  it('can decrease the temperature by 1 degree', function() {
    thermostat.decreaseTemperature(1);
    expect(thermostat.defaultTemperature).toEqual(19);
  });

  it('can decrease the temperature by 5 degrees', function() {
    thermostat.decreaseTemperature(5);
    expect(thermostat.defaultTemperature).toEqual(15);
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat.decreaseTemperature(19);
    expect(thermostat.defaultTemperature).toEqual(10);
  });

  it('has a power saving mode set to ON by default', function() {
    expect(thermostat.PSM).toEqual(true);
  });

  it('power saving mode can be set to OFF', function() {
    thermostat.PSMonOff(false);
    expect(thermostat.PSM).toEqual(false);
  });

  it('has a maximum temp of 25 degrees when PSM is ON', function() {
    thermostat.increaseTemperature(6);
    expect(thermostat.defaultTemperature).toEqual(25);
  });

  it('can reset the temperature when the reset button is clicked', function() {
    thermostat.increaseTemperature(5);
    thermostat.resetButton();
    expect(thermostat.defaultTemperature).toEqual(20);
  });

});