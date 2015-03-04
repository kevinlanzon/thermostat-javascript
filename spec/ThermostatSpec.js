describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a current temperature of 20 degrees', function() {
    expect(thermostat.currentTemperature).toEqual(20)
  });

  it('can increase the temperature by 1 degree', function() {
    thermostat.increaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(21);
  });

  it('can increase the temperature by 5 degrees', function() {
    thermostat.increaseTemperature(5);
    expect(thermostat.currentTemperature).toEqual(25);
  });

  it('can decrease the temperature by 1 degree', function() {
    thermostat.decreaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(19);
  });

  it('can decrease the temperature by 5 degrees', function() {
    thermostat.decreaseTemperature(5);
    expect(thermostat.currentTemperature).toEqual(15);
  });

  it('has a minimum temperature of 10 degrees', function(){
    thermostat.decreaseTemperature(9);
    expect(thermostat.currentTemperature).toEqual(11);

  });

});