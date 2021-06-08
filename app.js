const apiKey = "6a0df29c6861f2edb7251014b4adbd2f";

// Define all interactable items
const SELECTORS = {
    form: document.querySelector(".top-banner form"),
    button: document.querySelector(".top-banner form"),
    errorMessage: document.querySelector(".top-banner .error-message"),
    weatherCard: document.getElementById("weatherCardPlaceholder")
}


document.addEventListener("DOMContentLoaded", function() {
    const inputVal = "Rotterdam";
    let customWeatherText = "absolute shit";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {main, name, weather} = data;


            // Create weather item
            const weatherItem = `
                <h1 class="temperature-description">The weather in <span class="city">Rotterdam</span> is ${customWeatherText}.</h1>
                <p>...and by ${customWeatherText} I mean there's ${weather[0].description}</p>
                <p class="temperature-celcius">${Math.round(main.temp)}&deg;C</p>
            `;

            // Add item to container
            SELECTORS.weatherCard.innerHTML = weatherItem;

    }).catch(() => {
        errorMessage.textContent = "bla";
    });

});

