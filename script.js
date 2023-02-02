// open weather API link :
// var ApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f6b53d11e4e1d813df0a764640a0b00eg";





// var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         responseText.textContent = response.status;
//       }
//       return response.json();
//   });
// }

// getApi(requestUrl);












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

