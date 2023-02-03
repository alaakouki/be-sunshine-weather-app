// open weather API link :
var requestApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f6b53d11e4e1d813df0a764640a0b00eg";

var responseText = document.getElementById("response-text");


//         responseText.textContent = response.status;




function getApi(requestApiUrl) {
    fetch(requestApiUrl)
    .then ( function (response) {
        console.log(response);
        if (response.status === 200) {
            console.log(response.status);
        }
        return response.json();
    })
}
getApi(requestApiUrl);









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

