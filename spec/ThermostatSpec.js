describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe('by default', function() {
    it('starts with a temperature of 20 degrees', function() {
      expect(thermostat.currentTemperature).toEqual(20)
    });
  });

  describe('temperature', function() {
    it('can be increased by 1 degree', function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.currentTemperature).toEqual(21);
    });

    it('can be increased by 5 degrees', function() {
      thermostat.increaseTemperature(5);
      expect(thermostat.currentTemperature).toEqual(25);
    });

    it('can be decreased by 1 degree', function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.currentTemperature).toEqual(19);
    });

    it('can be decreased by 5 degrees', function() {
      thermostat.decreaseTemperature(5);
      expect(thermostat.currentTemperature).toEqual(15);
    });

    it('has a minimum of 10 degrees', function() {
      thermostat.decreaseTemperature(19);
      expect(thermostat.currentTemperature).toEqual(10);
    });
  });

  describe('has a powersaving mode(PSM)', function() {
    it('which is set to ON by default', function() {
      expect(thermostat.PSM).toEqual(true);
    });

    it('can be set to OFF', function() {
      thermostat.PSMoff(false);
      expect(thermostat.PSM).toEqual(false);
    });

    it('can be set to ON', function() {
      thermostat.PSMon();
      expect(thermostat.powerSaveOn).toEqual(25);
    });

    it('with a temp of 25 degrees when PSM is ON', function() {
      thermostat.increaseTemperature(6);
      expect(thermostat.currentTemperature).toEqual(25);
    });

    it('with a maximum temp of 32 degrees when PSM is OFF', function() {
      thermostat.PSMoff();
      thermostat.resetButton();
      thermostat.increaseTemperature(15);
      expect(thermostat.currentTemperature).toEqual(32);
    });

    it('can reset the temperature when the reset button is clicked', function() {
      thermostat.increaseTemperature(5);
      thermostat.resetButton();
      expect(thermostat.currentTemperature).toEqual(20);
    });
  });

   describe('reflects energy usage with a rating', function() {
    it('less than 18 degrees is considered low usage', function() {
      thermostat.decreaseTemperature(5);
      expect(thermostat.energyRating()).toEqual('low-usage');
    });
    it('less than 25 degrees is considered medium usage', function() {
      expect(thermostat.energyRating()).toEqual('medium-usage');
    });
    it('25 or above is considered high usage', function() {
      thermostat.increaseTemperature(5);
      expect(thermostat.energyRating()).toEqual('high-usage');
    });
  });
});
