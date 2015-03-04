describe('Thermostat', function() {
  var thermostat;

  it('has a default temp of 20 degrees', function() {
    thermostat = new Thermostat();
    expect(thermostat.currentTemperature).toEqual(20)
  });

  it('can increase the temperature by 1 degree', function() {
    thermostat = new Thermostat();
    thermostat.increaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(21);
  });

  it('can increase the temperature by 5 degrees', function() {
    thermostat = new Thermostat();
    thermostat.increaseTemperature(5);
    expect(thermostat.currentTemperature).toEqual(25);
  });

});