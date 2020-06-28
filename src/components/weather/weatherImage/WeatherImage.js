import React from "react";
import classes from "./WeatherImage.module.css";

const WeatherImage = (props) => {
  return (
    <div className={classes.WeatherImageContainer}>
      <div>
        <img
          src="props.data.current.weather_icons"
          alt="weather image"
          className={classes.imageStyle}
        />
      </div>
  <h3 className={classes.weatherDescriptions}>{this.props.data.current.weatherweather_descriptions}</h3>
    </div>
  );
};

export default WeatherImage;
