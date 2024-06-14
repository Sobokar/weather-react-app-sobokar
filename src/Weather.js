import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Kyiv</h1>
          <ul class="list-unstyled">
            <li>Thursday 16:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            className="float-left"
            alt="an icon with a sun partly hidden over the clouds"
          />

          <span className="temperature">22</span>
          <span className="units">°C</span>
        </div>

        <div className="col-6">
          <ul class="list-unstyled">
            <li>Precipitation</li>
            <li>Humidity: 52%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
