var thermostat = new Thermostat();
$(document).ready(function() {

  function textDisplay() {
  $('#temperature').text(thermostat.currentTemperature);
  };

  textDisplay();

  $('.increaseTemp').on('click', function() {
    thermostat.increaseTemperature(1);
    textDisplay();
  });

  $('.decreaseTemp').on('click', function() {
    thermostat.decreaseTemperature(1);
    textDisplay();
  });

  $('.resetButton').on('click', function() {
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