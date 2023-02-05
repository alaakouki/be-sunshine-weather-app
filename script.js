var searchBtn = document.querySelector(".searchbtn");
var inputValue = document.querySelector(".search-value");
var searchValue = inputValue.value;

var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");


// open weather API link :
// var requestApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f6b53d11e4e1d813df0a764640a0b00e";

// var responseText = document.getElementById("response-text");

//         responseText.textContent = response.status;


// open weather API link :
// var requestWeatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f6b53d11e4e1d813df0a764640a0b00e";


// var requestWeatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=f6b53d11e4e1d813df0a764640a0b00e";

// var requestWeatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=f6b53d11e4e1d813df0a764640a0b00e";

// var testUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6b53d11e4e1d813df0a764640a0b00e";
var requestWeatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6b53d11e4e1d813df0a764640a0b00e";


// function getApi(requestWeatherApiUrl) {
//     fetch(requestWeatherApiUrl)
//     .then ( function (response) {
//         console.log(response);
//         if (response.status === 200) {
//             console.log(response.status);
//         }
//         return response.json();
//     })
//     .then (function(data) {
//         console.log(data)

//     })
// }
// getApi(requestWeatherApiUrl);






searchBtn.addEventListener ( "click", function(){
    event.preventDefault();
    function getApi(requestWeatherApiUrl) {
        fetch(requestWeatherApiUrl)
        .then ( function (response) {
            console.log(response);
            if (response.status === 200) {
                console.log(response.status);
            }
            return response.json();
        })
        .then (function(data) {
            console.log(data)

            var nameValue = data['name'];
var tempValue = data["main"]["temp"];
// var windValue = data[];
// var humdityValue = data[];

temp.innertext = tempValue;
// wind.innertext = windValue;
// humidity.innertext = humdityValue;
    
        })
    }
    getApi(requestWeatherApiUrl);


});

if (searchValue !=="") {
window.localStorage.setItem("City Name", searchValue);
}




// just for multiple titles
var titleText = [
    "Be Sunshine",
    "Weather App"
];
var counter = 0;

setInterval( function() {
document.title = titleText [counter % titleText.length];
    counter++;
}, 2000);
