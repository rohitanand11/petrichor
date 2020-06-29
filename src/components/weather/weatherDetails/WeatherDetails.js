import React from "react";
import classes from "./WeatherDetails.module.css";

const WeatherDetails = (props) => {

  const createListItems = () => {
    return (
      <ul className={classes.ulStyle}>
        <li><strong>City </strong> : {props.pData.name}</li>
        <li><strong>Temprature</strong> : {props.pData.main.temp/10} cel</li>
        <li><strong>Humidity </strong> : {props.pData.main.humidity}</li>
        <li><strong>Co-ordinates</strong>:{props.pData.coord.lat},{props.pData.coord.lon}</li>
        <li><strong>Pressure</strong> : {props.pData.main.pressure} atm</li>
        <li><strong>Feels like</strong> : {props.pData.main.feels_like/10} cel</li>
        <li><strong>Wind speed</strong> : {props.pData.wind.speed} km/h</li>
      </ul>
    );
  };

  return (
  <div className={classes.WeatherDetailsContainer}>
      {createListItems()}
  </div>);
};

export default WeatherDetails;
