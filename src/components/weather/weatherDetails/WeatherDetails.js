import React from "react";
import classes from "./WeatherDetails.module.css";

const WeatherDetails = (props) => {

  const createListItems = () => {
    return (
      <ul className={classes.ulStyle}>
        <li><strong>City</strong> : {props.pData.location.name}</li>
        <li><strong>Temprature</strong> : {props.pData.current.temperature} degree cel</li>
        <li><strong>Humidity</strong> : {props.pData.current.humidity}</li>
        <li><strong>Day Time</strong> : {props.pData.current.is_day}</li>
        <li><strong>Pressure</strong> : {props.pData.current.pressure}</li>
        <li><strong>Loc Time</strong> : {props.pData.location.localtime}</li>
        <li><strong>Visiblity</strong> : {props.pData.current.visibility}</li>
      </ul>
    );
  };

  return (
  <div className={classes.WeatherDetailsContainer}>
      {createListItems()}
  </div>);
};

export default WeatherDetails;
