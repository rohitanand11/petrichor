import React from "react";
import classes from "./WeatherImage.module.css";

const WeatherImage = (props) => {
  const getImageUrl = (pId) => {
    return `https://openweathermap.org/img/wn/${pId}@2x.png`
  }
  return (
    <div className={classes.WeatherImageContainer}>
        <img
          src={getImageUrl(props.pData.weather[0].icon)}
          alt="weather"
          className={classes.imageStyle}
        />
      {/* <h3 className={classes.weatherDescriptions}> */}
      <h3 className={classes.WeatherDescription}>
        {props.pData.weather[0].description}
      </h3>
    </div>
  );
};

export default WeatherImage;
