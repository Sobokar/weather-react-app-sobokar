import React from "react";
import FormattedDate from "./FormattedDate ";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mb-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul className="list-unstyled">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            className="float-left"
            alt={props.data.description}
          />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </div>

        <div className="col-6">
          <ul className="list-unstyled">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
