import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This app is created by Yevheniia Sobokar and it is open-sourced on{" "}
          <a
            className="App-link"
            href="https://github.com/Sobokar/weather-react-app-sobokar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
