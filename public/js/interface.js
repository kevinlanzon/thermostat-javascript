console.log("testing");

var thermostat = new Thermostat();
$(document).ready(function() {

  function textDisplay() {
  $('#temperature').text(thermostat.currentTemperature);
  $('body, #power-saving-divider').attr('class', thermostat.energyRating());
  };

  textDisplay();

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature(1);
    textDisplay();
  });

  $('.decrease-temp').on('click', function() {
    thermostat.decreaseTemperature(1);
    textDisplay();
  });

  $('.reset-button').on('click', function() {
   thermostat.resetButton();
   textDisplay();
  });

  $('.PSM-on').on('click', function() {
   thermostat.PSMon();
   textDisplay();
  });

  $('.PSM-off').on('click', function() {
   thermostat.PSMoff();
   textDisplay();
  });
});
