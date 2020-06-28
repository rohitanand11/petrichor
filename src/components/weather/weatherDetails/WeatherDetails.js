import React from "react";
import classes from "./WeatherDetails.module.css";

const WeatherDetails = (props) => {

  const createListItems = () => {
    return (
      <ul className={classes.ulStyle}>
        <li>City : {props.pData.location.name}</li>
        <li>Temprature : {props.pData.current.temperature} degree cel</li>
        <li>Humidity : {props.pData.current.humidity}</li>
        <li>Day Time : {props.pData.current.is_day}</li>
        <li>Pressure : {props.pData.current.pressure}</li>
        <li>Local Time:{props.pData.location.localtime}</li>
        <li>Visiblity : {props.pData.current.visibility}</li>
      </ul>
    );
  };

  return (
  <div className={classes.WeatherDetailsContainer}>
      {createListItems()}
  </div>);
};

export default WeatherDetails;
