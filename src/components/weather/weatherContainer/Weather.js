import React from 'react';
import classes from './Weather.module.css';
import WeatherImage from '../weatherImage/WeatherImage';

const Weather = (props) => {
    return(
        <div>
            <div className={classes.weatherContainer}>
                <WeatherImage/>
                {/* details */}
            </div>
        </div>
    );
}

export default Weather;