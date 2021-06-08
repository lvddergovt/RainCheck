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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {main, name, weather} = data;


            // Create weather item
            const weatherItem = `
                <h1 class="temperature-description">${weather[0].description}</h1>
                <p class="temperature-celcius">${main.temp}&deg;C</p>
            `;

            // Add item to container
            SELECTORS.weatherCard.innerHTML = weatherItem;

    }).catch(() => {
        errorMessage.textContent = "bla";
    });

});

