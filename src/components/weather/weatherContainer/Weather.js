import React from 'react';
import classes from './Weather.module.css';
import WeatherImage from '../weatherImage/WeatherImage';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import WeatherHeading from '../weather_heading/WeatherHeading';

const Weather = (props) => {
    return(
        <div className={classes.WeatherMainContainer}>
            <WeatherHeading/>
            <div className={classes.weatherContainer}>
                <WeatherImage pData={props.pData}/>
                <WeatherDetails pData={props.pData}/>
            </div>
        </div>
    );
}

export default Weather;