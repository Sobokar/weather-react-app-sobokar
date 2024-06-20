import React from "react";
import FormattedDate from "./FormattedDate ";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="list-unstyled">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <img
                src={props.data.iconUrl}
                className="float-left"
                alt={props.data.description}
              />
            </div>

            <div>
              <WeatherUnits celsius={props.data.temperature} />
            </div>
          </div>
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
