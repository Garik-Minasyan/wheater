import React, { useState } from "react";
import Axios from "axios";

import "./App.css";
import Header from "./components/header/Header";
import City from "./components/city/City";
import Coord from "./components/cityWeather/Coord";
import Form from "./components/form/Form";
import Alert from "./components/alert/Alert";

function App() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);
  const [coord, setCoord] = useState([]);
  const [alert, setAlert] = useState("");

  const API_KEY_NAME = "50f09cc79a3aca3f4409adcdb4614f6d";

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_NAME}`;

  const getData = async () => {
    if (city !== "") {
      const rezult = await Axios.get(url);
      if (!rezult.data.name) {
        return setAlert("No city with such name");
      }
      console.log(rezult);
      setCityData(rezult.data);
      setCoord(rezult.data.coord);
      setCity("");
    } else {
      setAlert("Please city the form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Form onSubmit={onSubmit} onChange={onChange} city={city} />
      </div>
      <Alert alert={alert} />
      <div className="cityDataCoord">
        <City cityData={cityData} />
        <Coord coord={coord} />
      </div>
    </div>
  );
}

export default App;
