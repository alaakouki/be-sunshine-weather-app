var searchBtn = document.querySelector(".searchbtn");
var inputValue = document.querySelector(".search-value");


// variables of main day:
var currentDate = document.querySelector(".current-date");
var currentWeatherIcon = document.querySelector(".current-weather-icon");
var currentTemp = document.querySelector(".current-temp");
var currentWind = document.querySelector(".current-wind");
var currentHumidity = document.querySelector(".current-humidity");


// variables of 1-of-5 day:
var dateOne = document.querySelector(".date-1");
var weatherIconOne = document.querySelector(".weather-icon-1");
var tempOne = document.querySelector(".temp-1");
var windOne = document.querySelector(".wind-1");
var humidityOne = document.querySelector(".humidity-1");


// variables of 2-of-5 day:
var dateTwo = document.querySelector(".date-2");
var weatherIconTwo = document.querySelector(".weather-icon-2");
var tempTwo = document.querySelector(".temp-2");
var windTwo = document.querySelector(".wind-2");
var humidityTwo = document.querySelector(".humidity-2");


// variables of 3-of-5 day:
var dateThree = document.querySelector(".date-3");
var weatherIconThree = document.querySelector(".weather-icon-3");
var tempThree = document.querySelector(".temp-3");
var windThree = document.querySelector(".wind-3");
var humidityThree = document.querySelector(".humidity-3");


// variables of 4-of-5 day:
var dateFour = document.querySelector(".date-4");
var weatherIconFour = document.querySelector(".weather-icon-4");
var tempFour = document.querySelector(".temp-4");
var windFour = document.querySelector(".wind-4");
var humidityFour = document.querySelector(".humidity-4");


// variables of 5-of-5 day:
var dateFive = document.querySelector(".date-5");
var weatherIconFive = document.querySelector(".weather-icon-5");
var tempFive = document.querySelector(".temp-5");
var windFive = document.querySelector(".wind-5");
var humidityFive = document.querySelector(".humidity-5");

var infoSide = document.querySelector(".info-side");
var presentDay = document.querySelector(".present-day");




searchBtn.addEventListener("click", function () {
    // event.preventDefault();

    infoSide.style.visibility = "hidden";
    infoSide.style.display = "none";
    presentDay.style.visibility = "visible";



    // open weather API link :
    var requestWeatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=f6b53d11e4e1d813df0a764640a0b00e";
    // var requestWeatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=f6b53d11e4e1d813df0a764640a0b00e";

    function getApi(requestWeatherApiUrl) {
        fetch(requestWeatherApiUrl)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.status);
                }
                return response.json();
            })
            .then(function (data) {
                console.log(data)


                // current day :
                var forDateOnly = data.list[0].dt_txt;
                const dateOnlyCurrentArr = forDateOnly.split(" ");
                // console.log(dateOnlyCurrentArr);
                // currentDate.innerText = data.city.name + " : " + data.list[0].dt_txt;
                currentDate.innerText = data.city.name + " : " + dateOnlyCurrentArr[0];
                var iconCurrent = data.list[0].weather[0].icon;
                currentWeatherIcon.src = "https://openweathermap.org/img/wn/" + iconCurrent + "@2x.png";
                currentTemp.innerText = "Temp: " + data.list[0].main.temp;
                currentWind.innerText = "Wind: " + data.list[0].wind.deg + "MPH";
                currentHumidity.innerText = "Humidity: " + data.list[0].main.humidity + "%";


                // 1st day after today / 1-5 / :
                var forDateOneOnly = data.list[5].dt_txt;
                const forDateOneOnlyArr = forDateOneOnly.split(" ");
                // console.log(forDateOneOnlyArr);
                // dateOne.innerText = data.list[5].dt_txt;
                dateOne.innerText = forDateOneOnlyArr[0];
                var iconOne = data.list[5].weather[0].icon;
                weatherIconOne.src = "https://openweathermap.org/img/wn/" + iconOne + "@2x.png";
                tempOne.innerText = "Temp: \n" + data.list[5].main.temp;
                windOne.innerText = "Wind: \n" + data.list[5].wind.deg + "MPH";
                humidityOne.innerText = "Humidity: \n" + data.list[5].main.humidity + "%";


                // 2nd day after today / 2-5 / :
                var forDateTwoOnly = data.list[14].dt_txt;
                const forDateTwoOnlyArr = forDateTwoOnly.split(" ");
                // console.log(forDateTwoOnlyArr);
                // dateTwo.innerText = data.list[14].dt_txt;
                dateTwo.innerText = forDateTwoOnlyArr[0];
                var iconTwo = data.list[14].weather[0].icon;
                weatherIconTwo.src = "https://openweathermap.org/img/wn/" + iconTwo + "@2x.png";
                tempTwo.innerText = "Temp: \n" + data.list[14].main.temp;
                windTwo.innerText = "Wind: \n" + data.list[14].wind.deg + "MPH";
                humidityTwo.innerText = "Humidity: \n" + data.list[14].main.humidity + "%";


                // 3rd day after today / 3-5 / :
                var forDateThreeOnly = data.list[22].dt_txt;
                const forDateThreeOnlyArr = forDateThreeOnly.split(" ");
                // console.log(forDateThreeOnlyArr);
                // dateThree.innerText = data.list[22].dt_txt;
                dateThree.innerText = forDateThreeOnlyArr[0];
                var iconThree = data.list[22].weather[0].icon;
                weatherIconThree.src = "https://openweathermap.org/img/wn/" + iconThree + "@2x.png";
                tempThree.innerText = "Temp: \n" + data.list[22].main.temp;
                windThree.innerText = "Wind: \n" + data.list[22].wind.deg + "MPH";
                humidityThree.innerText = "Humidity: \n" + data.list[22].main.humidity + "%";


                // 4th day after today / 4-5 / :
                var forDateFourOnly = data.list[30].dt_txt;
                const forDateFourOnlyArr = forDateFourOnly.split(" ");
                // console.log(forDateFourOnlyArr);
                // dateFour.innerText = data.list[30].dt_txt;
                dateFour.innerText = forDateFourOnlyArr[0];
                var iconFour = data.list[30].weather[0].icon;
                weatherIconFour.src = "https://openweathermap.org/img/wn/" + iconFour + "@2x.png";
                tempFour.innerText = "Temp: \n" + data.list[30].main.temp;
                windFour.innerText = "Wind: \n" + data.list[30].wind.deg + "MPH";
                humidityFour.innerText = "Humidity: \n" + data.list[30].main.humidity + "%";


                // 5th day after today / 5-5 / :
                var forDateFiveOnly = data.list[38].dt_txt;
                const forDateFiveOnlyArr = forDateFiveOnly.split(" ");
                // console.log(forDateFiveOnlyArr);
                // dateFive.innerText = data.list[38].dt_txt;
                dateFive.innerText = forDateFiveOnlyArr[0];
                var iconFive = data.list[38].weather[0].icon;
                weatherIconFive.src = "https://openweathermap.org/img/wn/" + iconFive + "@2x.png";
                tempFive.innerText = "Temp: \n" + data.list[38].main.temp;
                windFive.innerText = "Wind: \n" + data.list[38].wind.deg + "MPH";
                humidityFive.innerText = "Humidity: \n" + data.list[38].main.humidity + "%";

            })
    }
    getApi(requestWeatherApiUrl);


    // working
    window.localStorage.setItem("City Name", inputValue.value);


    // Making search history :
    var searchHistory = document.getElementById("search-history");
    var newCitySearch = document.createElement("button");
    newCitySearch.className = "requested-city";

    // create text node :
    var newCityNameText = document.createTextNode(localStorage.getItem("City Name"));

    // append text to appear inside button
    newCitySearch.appendChild(newCityNameText);

    // append button to be after Recently viewed in search history
    searchHistory.appendChild(newCitySearch);

    





});


// just for multiple titles
var titleText = [
    "Be Sunshine",
    "Weather App"
];
var counter = 0;

setInterval(function () {
    document.title = titleText[counter % titleText.length];
    counter++;
}, 2000);
