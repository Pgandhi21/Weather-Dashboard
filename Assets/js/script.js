 

var ApiKey = "3e666a3d81484f1bb070cec8466f5dd9";

var countUl = $(".cityList").children().length;
console.log(countUl);




$(".cityForm").children("button").click(function(event){
    event.preventDefault();
    var city = $(".cityFormInput").val();
    cityWeather(city);
    cityListEl(city); 
});

$(".cityList").children("button").click(function(){
    alert("button clicked");
    var cityEl = $(this).text();
    console.log(cityEl);
    cityWeather(cityEl);    
});



function cityListEl(city) {
    var cityListItemEl = document.createElement("button");
    cityListItemEl.innerText = city;
    console.log(countUl);
    if (countUl >= 8) {
        $("ul button").last().remove();
        $("ul").prepend(cityListItemEl);
        $(".cityList").children().addClass("cityListBtn");
        console.log(countUl);
    } else {
        $("ul").prepend(cityListItemEl);
        $(".cityList").children().addClass("cityListBtn");
        countUl++;
        console.log(countUl);
    };  
};



function cityWeather(cityInput) {
    var latLonURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=3e666a3d81484f1bb070cec8466f5dd9";
    var lat;
    var lon;
    var city = cityInput;
    fetch(latLonURL)
        .then(response =>response.json())
        .then(function(data) {
            console.log(data);
            cityName = data.name;
            lat = data.coord.lat;
            lon = data.coord.lon;
            weatherUrl(lat, lon, cityName);
            console.log(lat);
            console.log(lon);     
    });
    
    function weatherUrl(lat, lon, cityName) {
        var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&cnt=6&appid=3e666a3d81484f1bb070cec8466f5dd9";
        fetch(weatherUrl)
            .then(response =>response.json())
            .then(function(data) {
                console.log(data);
                getWeather(data, cityName);
        });
    };
};

function getWeather(data, cityInput){
$(".bigCard").children().remove();
 console.log(data,cityInput);
 var date = moment.unix(data.current.dt).format("MM/DD/YYYY");
 var icon = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
 
 
 $('<h5>' + cityInput + ' ('+date+')</h5>').appendTo(".bigCard");
 $(".bigCard").children('h5').addClass("card-title");
 $('<div><img src="' + icon +'"/></div>').appendTo(".bigCard");
 $('<p>Temp: ' + data.current.temp +' °F</p>').appendTo(".bigCard");
 $('<p>Wind: ' + data.current.wind_speed +' MPH</p>').appendTo(".bigCard");
 $('<p>Humidity: ' + data.current.humidity +' %</p>').appendTo(".bigCard");
 $('<p>UV Index: ' + data.current.uvi +'</p>').appendTo(".bigCard");
 $(".bigCard").children('p').addClass("card-title");
};




// storeValues(); 
// function storeValues() {
//     for (i = 0; i <= countUl; i++) {
//         var cityKey = i;
//         var cityKeyValue = $(".cityList").children(i).innerText;
//         console.log(cityKey);
//         console.log(cityKeyValue);
//         localStorage.setItem(cityKey, cityKeyValue);
//     }
//     console.log(localStorage.length);
//     };



 

// function getValues() {
//     for (i = 0; i <= localStorage.length; i++) {
//         console.log(localStorage.length);
//         var newListItems = document.createElement("button");
//         newListItems.innerText = cityKeyValues[i];
//         $(".cityList").append(newListItems);
//         $(".cityList").children().addClass("cityListBtn");
//     }
// };

// getValues();