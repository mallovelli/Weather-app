$(document).ready(function () {
  //Get location
  navigator.geolocation.getCurrentPosition(success, error);
  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error() {
    console.log("error");
  }
  function weather(lat, long) {
    var URL = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function (data) {
      console.log(data);
      updateDOM(data);
    });
  }
  weather();
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src", icon);
  }
});