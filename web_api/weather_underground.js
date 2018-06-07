
const key ="";
const weatherUndergroundApi = `http://api.wunderground.com/api/${key}/conditions/q/france/bordeaux.json`;
fetch(weatherUndergroundApi)
.then(response => response.json())
.then(weather => {
    const location = weather.current_observation.display_location.full;
    const temperature = weather.current_observation.temp_c;
    const humidity = weather.current_observation.relative_humidity;
    const image_url = weather.current_observation.icon_irl;
    const summaryElement = document.createElement("div");
    summaryElement.textContent = `Temperature is ${temperature} with ${humidity} humidity`;
    const imageElement = document.createElement("img");
    imageElement.src = image_url;
    document.querySelector("h2").textContent += `${location}`;
    const weatherElement = document.getElementById("weather");
    weatherElement.appendChild(summaryElement);
    weatherElement.appendChild(imageElement);
})
.catch(err => console.log(err.message));