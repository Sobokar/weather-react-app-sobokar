import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.main.city,
      description: response.main.condition.description,
      date: "Thursday 16:00",
      temperature: response.main.temperature,
      iconUrl: response.main.condition.icon_url,
      humidity: response.main.temperature.humidity,
      wind: response.main.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name..."
                className="CityField w-100 p-2"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 p-2"
              />
            </div>
          </div>
        </form>
        <div className="row mb-3">
          <div className="col-6">
            <h1>{weatherData.main.city}</h1>
            <ul class="list-unstyled">
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              className="float-left"
              alt={weatherData.description}
            />

            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">°C</span>
          </div>

          <div className="col-6">
            <ul class="list-unstyled">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weatherData.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
