document.addEventListener('DOMContentLoaded', function () {
const apiKey = "d6e473336b1844242fe7a62c99bcad0f"; 
    
  
    document.getElementById('get-weather').addEventListener('click', function () {
      const city = document.getElementById('city-input').value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °F</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Wind Speed: ${data.wind.speed} mph</p>
          `;
          document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
          document.getElementById('weather-info').innerHTML = `<p>City not found. Please try again.</p>`;
          console.error('Error fetching weather data:', error);
        });
    });
  });
  