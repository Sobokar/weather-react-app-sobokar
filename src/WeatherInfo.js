import React from "react";
import FormattedDate from "./FormattedDate ";
import WeatherUnits from "./WeatherUnits";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <div className="row mt-3">
        <div className="col-6">
          <ul className="list-unstyled">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="list-unstyled">
            <li className="Humidity">Humidity: {props.data.humidity}%</li>
            <li className="Wind">Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={65} />
            </div>
            <div className="float-left mt-3">
              <WeatherUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
