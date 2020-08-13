import React from "react";
import "./city.css";

const City = ({ cityData }) => {
  const { name, timezone } = cityData;
  return (
    <div className="city">
      <h3>City - {name}</h3>
      <h3>Timezone - {timezone} </h3>
    </div>
  );
};

export default City;
