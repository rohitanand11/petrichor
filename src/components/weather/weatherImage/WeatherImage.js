import React from "react";
import classes from "./WeatherImage.module.css";

const WeatherImage = (props) => {
  return (
    <div className={classes.WeatherImageContainer}>
        <img
          src={props.pData.current.weather_icons[0]}
          alt="weather"
          className={classes.imageStyle}
        />
      {/* <h3 className={classes.weatherDescriptions}> */}
      <h3 className={classes.WeatherDescription}>
        {props.pData.current.weather_descriptions[0]}
      </h3>
    </div>
  );
};

export default WeatherImage;
