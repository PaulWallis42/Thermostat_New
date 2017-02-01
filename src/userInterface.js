

// Same as document.ready
$(function(){

  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemp());
    $('#power-saving-status').text(thermostat.powerSavingStatus());
    $('#temperature').attr('class', thermostat.energyUsage());
  }


  $('#temperature-up').click(function(){
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.turnPowersavingOn();
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.turnPowersavingOff();
    updateTemperature();
  });


  $('#submit-city').click(function(event){
    event.preventDefault();
    city = $('#input-city').val();
    $.get(url + city + apiKey, function(data) {
      $('#current-city').text(data.name);
      $('#current-temp').text(data.main.temp);
      console.log(data);
      console.log(city);
    })

  });


  var url = 'http://api.openweathermap.org/data/2.5/weather?q='
  var city = 'London'
  var apiKey = ',uk&appid=9357e6bbfecb91c85ad67446164bfbce&units=metric'


  $.get(url + city + apiKey, function(data) {
    $('#current-city').text(data.name);
    $('#current-temp').text(data.main.temp);
    console.log(city);
  })

});
