$(document).ready(function() {

  var therm = new Thermostat()

  updateTemperature();

  $.get('http://localhost:4567/temperature', function(data){
      therm.temperature = parseInt(data);
      console.log(data);
      updateTemperature();
  });

  function sendTemperature() {
    var send = {temperature: therm.temperature}
    $.post('http://localhost:4567/temperature', send)
  };

  function updateTemperature() {
    $('#temperature').text("Current temp: "+therm.temperature+" Celcius");
    $('#temperature').attr('class', therm.usage());
  };

  $('#temperature-up').click(function(){
    therm.up()
    updateTemperature();
    sendTemperature();
  });

  $('#temperature-down').click(function(){
    therm.down()
    updateTemperature();
    sendTemperature();
  });

  $('#temperature-reset').click(function(){
    therm.reset()
    updateTemperature();
    sendTemperature();
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

  displayWeather('London');

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    //   $('#current-temperature').text(data.main.temp);
    // });
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.name+": "+data.main.temp+" Celcius");
    });
  };
});
