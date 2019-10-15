$(document).ready(function() {

  var therm = new Thermostat()
  $('#temperature').text("Current temp: "+therm.temperature);

  $('#temperature-up').click(function(){
    therm.up()
    $('#temperature').text("Current temp: "+therm.temperature);
  })

  $('#temperature-down').click(function(){
    therm.down()
    $('#temperature').text("Current temp: "+therm.temperature);
  })


})
