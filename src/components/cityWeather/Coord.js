import React from "react";
import "./coord.css";

const Coord = ({ coord }) => {
  const { lat, lon } = coord;
  return (
    <div className="coord">
      <h3> Lat - {lat}</h3>
      <h3> Lon - ( {lon} )</h3>
    </div>
  );
};

export default Coord;
