//open weather api keys 
const apiKey = "0950d9cfe7665d9f04a07ef386424bc3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#search');
const weatherIcon = document.querySelector('#weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    //display error message if city name is invalid
    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector(".weather").style.display = "none";
    } else if (response.status === 200) {
        document.querySelector('.error').style.display = 'none';
        document.querySelector(".weather").style.display = "block";
    }
    let data = await response.json();

    //use "console.log(data)" here to check the right values for your app

    document.querySelector('#cityName').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    //change the images for different weathers
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png";
    }else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/images/clear.png";
    }else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/images/rain.png";
    }else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "/images/snow.png";
    }else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/images/drizzle.png";
    }else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/images/mist.png";
    }

}

    searchBtn.addEventListener('click', () => {
        checkWeather(searchBar.value);
    });