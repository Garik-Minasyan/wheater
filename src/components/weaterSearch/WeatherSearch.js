import React from "react";
import "./weather-search.css";

const WeatherSearch = ({ api_call, oneChange }) => {
  return (
    <div className="weathr-search">
      <form onSubmit={api_call} onChange={oneChange}>
        <div className="inputArrow">
          <input className="search" autoComplete="off" type="text" />
          <div>
            <button className="btn">click</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
