const apiKey = "6a0df29c6861f2edb7251014b4adbd2f";

// Define all interactable items
const SELECTORS = {
    form: document.querySelector(".top-banner form"),
    button: document.querySelector(".top-banner form"),
    errorMessage: document.querySelector(".top-banner .error-message"),
    weatherCard: document.getElementById("weatherCardPlaceholder")
}

const waveSvg = `<svg class="bottom-drip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#545454" fill-opacity="1" d="M0,0L12,37.3C24,75,48,149,72,160C96,171,120,117,144,117.3C168,117,192,171,216,208C240,245,264,267,288,261.3C312,256,336,224,360,218.7C384,213,408,235,432,218.7C456,203,480,149,504,117.3C528,85,552,75,576,90.7C600,107,624,149,648,165.3C672,181,696,171,720,144C744,117,768,75,792,53.3C816,32,840,32,864,74.7C888,117,912,203,936,245.3C960,288,984,288,1008,266.7C1032,245,1056,203,1080,170.7C1104,139,1128,117,1152,122.7C1176,128,1200,160,1224,181.3C1248,203,1272,213,1296,218.7C1320,224,1344,224,1368,208C1392,192,1416,160,1428,144L1440,128L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path></svg>`;

document.addEventListener("DOMContentLoaded", function() {
    const inputVal = "Rotterdam";
    let customWeatherText = "absolute shit";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {main, name, weather} = data;

            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
              }@2x.png`;

            // Create weather item
            const weatherItem = `
                <h1 class="temperature-description">The weather in <span class="city">Rotterdam</span> is ${customWeatherText}.</h1>
                <p>...and by ${customWeatherText} I mean there's ${weather[0].description}</p>
                <p class="temperature-celcius">${Math.round(main.temp)}&deg;C</p>
                <img src="${icon}" />
                ${waveSvg}
                
            `;

            // Add item to container
            SELECTORS.weatherCard.innerHTML = weatherItem;

    }).catch(() => {
        errorMessage.textContent = "bla";
    });

});

