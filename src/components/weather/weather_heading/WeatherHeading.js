import React from 'react';
import Classes from './WeatherHeading.module.css';

const WeatherHeading = () => {
    
    return(
        <div className={Classes.WeatherHeading}>
            <h1>Weather Report</h1>
        </div>
    );
}

export default WeatherHeading;