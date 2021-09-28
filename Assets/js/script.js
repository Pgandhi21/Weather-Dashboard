 

var ApiKey = "3e666a3d81484f1bb070cec8466f5dd9";

var countUl = $(".cityList").children().length;
console.log(countUl);

cityWeather("Atlanta"); 


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
$(".card1").children().remove();
$(".card2").children().remove();
$(".card3").children().remove();
$(".card4").children().remove();
$(".card5").children().remove();

 console.log(data,cityInput);
//  Big Card Data  
$('<h5>' + cityInput + ' ('+ moment.unix(data.daily[0].dt).format("MM/DD/YYYY") +')</h5>').appendTo(".bigCard");
$(".bigCard").children('h5').addClass("card-title");
$('<div><img src="' + "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png" +'"/></div>').appendTo(".bigCard");
$('<p>Temp: ' + data.daily[0].temp.day +'/' + data.daily[0].temp.night+ ' °F</p>').appendTo(".bigCard");
$('<p>Wind: ' + data.daily[0].wind_speed +' MPH</p>').appendTo(".bigCard");
$('<p>Humidity: ' + data.daily[0].humidity +' %</p>').appendTo(".bigCard");
$('<p>UV Index: ' + data.daily[0].uvi +'</p>').appendTo(".bigCard");
$(".bigCard").children('p').addClass("card-text");

//  Card 1 Data  
$('<h5>'+ moment.unix(data.daily[1].dt).format("MM/DD/YYYY") +'</h5>').appendTo(".card1");
$(".card1").children('h5').addClass("card-title");
$('<p><img src="' + "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png" +'"/></p>').appendTo(".card1");
$('<p>Temp: ' + data.daily[1].temp.day +'/' + data.daily[1].temp.night+ ' °F</p>').appendTo(".card1");
$('<p>Wind: ' + data.daily[1].wind_speed +' MPH</p>').appendTo(".card1");
$('<p>Humidity: ' + data.daily[1].humidity +' %</p>').appendTo(".card1");
$(".card1").children('p').addClass("card-text"); 

//  Card 2 Data  
$('<h5>'+ moment.unix(data.daily[2].dt).format("MM/DD/YYYY") +'</h5>').appendTo(".card2");
$(".card2").children('h5').addClass("card-title");
$('<p><img src="' + "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png" +'"/></p>').appendTo(".card2");
$('<p>Temp: ' + data.daily[2].temp.day +'/' + data.daily[2].temp.night+ ' °F</p>').appendTo(".card2");
$('<p>Wind: ' + data.daily[2].wind_speed +' MPH</p>').appendTo(".card2");
$('<p>Humidity: ' + data.daily[2].humidity +' %</p>').appendTo(".card2");
$(".card2").children('p').addClass("card-text"); 

//  Card 3 Data  
$('<h5>'+ moment.unix(data.daily[2].dt).format("MM/DD/YYYY") +'</h5>').appendTo(".card3");
$(".card3").children('h5').addClass("card-title");
$('<p><img src="' + "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png" +'"/></p>').appendTo(".card3");
$('<p>Temp: ' + data.daily[2].temp.day +'/' + data.daily[2].temp.night+ ' °F</p>').appendTo(".card3");
$('<p>Wind: ' + data.daily[2].wind_speed +' MPH</p>').appendTo(".card3");
$('<p>Humidity: ' + data.daily[2].humidity +' %</p>').appendTo(".card3");
$(".card3").children('p').addClass("card-text"); 

//  Card 4 Data  
$('<h5>'+ moment.unix(data.daily[3].dt).format("MM/DD/YYYY") +'</h5>').appendTo(".card4");
$(".card4").children('h5').addClass("card-title");
$('<p><img src="' + "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png" +'"/></p>').appendTo(".card4");
$('<p>Temp: ' + data.daily[3].temp.day +'/' + data.daily[3].temp.night+ ' °F</p>').appendTo(".card4");
$('<p>Wind: ' + data.daily[3].wind_speed +' MPH</p>').appendTo(".card4");
$('<p>Humidity: ' + data.daily[3].humidity +' %</p>').appendTo(".card4");
$(".card4").children('p').addClass("card-text"); 

//  Card 5 Data  
$('<h5>'+ moment.unix(data.daily[4].dt).format("MM/DD/YYYY") +'</h5>').appendTo(".card5");
$(".card5").children('h5').addClass("card-title");
$('<p><img src="' + "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png" +'"/></p>').appendTo(".card5");
$('<p>Temp: ' + data.daily[4].temp.day +'/' + data.daily[4].temp.night+ ' °F</p>').appendTo(".card5");
$('<p>Wind: ' + data.daily[4].wind_speed +' MPH</p>').appendTo(".card5");
$('<p>Humidity: ' + data.daily[4].humidity +' %</p>').appendTo(".card5");
$(".card5").children('p').addClass("card-text"); 

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