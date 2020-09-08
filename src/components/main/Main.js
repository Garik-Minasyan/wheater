import React, { useState } from "react";

import WeatherSearch from "../weaterSearch/WeatherSearch";
import WeatherData from "../weatherData/WeatherData";
import DateTime from "../dateTime/DateTime";
import Axios from "axios";
import "./main.css";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [cityName, SetCityName] = useState("");
  const api_call = async (e) => {
    e.preventDefault();
    const API_KEY_NAME = "50f09cc79a3aca3f4409adcdb4614f6d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_NAME}&units=metric`;
    const recuest = Axios.get(url);
    const response = await recuest;
    setWeather(response.data.main);
    SetCityName(response.data);
  };

  const oneChange = (e) => {
    setCity(e.target.value);
    setWeather("");
  };

  return (
    <div className="main">
      <div>
        <DateTime />
        <div className="weatherSearchDate">
          <WeatherSearch api_call={api_call} oneChange={oneChange} />
          {weather && <WeatherData weather={weather} cityName={cityName} />}
        </div>
      </div>
    </div>
  );
};

export default Main;
