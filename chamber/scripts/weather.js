const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-caption');
const forecastContainer = document.getElementById('forecast');

const apiKey = 'ab520e4710bc7b1e7a9253788f49f215';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-22.786&lon=-43.312&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-22.786&lon=-43.312&units=imperial&appid=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
    apiFetch();
    fetchForecastData();
});

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `Today's: ${data.main.temp}°F - ${desc}`;
}

function fetchForecastData() {
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            forecastContainer.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const forecast = data.list[i * 8]; // 3-hour intervals, 8 per day
                const date = new Date(forecast.dt * 1000);
                const temp = forecast.main.temp;
                const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                const description = forecast.weather[0].description;

                const forecastElement = document.createElement('figure');
                forecastElement.classList.add('weather-figure');

                const forecastIcon = document.createElement('img');
                forecastIcon.src = icon;
                forecastIcon.alt = description;

                const forecastCaption = document.createElement('figcaption');
                forecastCaption.textContent = `${date.toLocaleDateString()}: ${temp}°F - ${description}`;

                forecastElement.appendChild(forecastIcon);
                forecastElement.appendChild(forecastCaption);
                forecastContainer.appendChild(forecastElement);
            }
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}