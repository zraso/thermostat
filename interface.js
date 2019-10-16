$(document).ready(function() {

  var therm = new Thermostat()
  $('#temperature').text("Current temp: "+therm.temperature);

  $('#temperature-up').click(function(){
    therm.up()
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    therm.down()
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    therm.reset()
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    therm.powerSaveOn()
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    therm.powerSaveOff()
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text("Current temp: "+therm.temperature);
    $('#temperature').attr('class', therm.usage());
  };
});
