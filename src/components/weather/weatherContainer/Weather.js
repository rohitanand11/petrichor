import React from 'react';
import classes from './Weather.module.css';
import WeatherImage from '../weatherImage/WeatherImage';
import WeatherDetails from '../weatherDetails/WeatherDetails';

const Weather = (props) => {
    console.log(props.pData);
    return(
        <div>
            <div className={classes.weatherContainer}>
                <WeatherImage pData={props.pData}/>
                <WeatherDetails pData={props.pData}/>
            </div>
        </div>
    );
}

export default Weather;