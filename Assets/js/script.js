

var ApiKey = "3e666a3d81484f1bb070cec8466f5dd9";

var city = 'Atlanta';

var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&cnt=6&appid=3e666a3d81484f1bb070cec8466f5dd9";


fetch(weatherURL)
    .then(response =>response.json())
    .then(function(data) {
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        console.log(data);
        console.log(lat);
        console.log(lon);
    });

