import React from 'react';
import './index.css';

const WeatherData = ({data}) => {
    console.log(data);
    const { name, sys, main, weather, cod, message } = data;
    return (
        <div className="weather-data">
            {
                data.name &&
                <div>
                    <h3>City: { name }</h3>
                    <h3>Country: { sys.country }</h3>
                    <h3>Temperature: { main.temp.toFixed(0) }&deg;</h3>
                    <h3>Humidity: { main.humidity }%</h3>
                    <h3>Description: { weather[0].main }</h3>
                </div>
            }
            {
                cod === '404' &&
            <h3>Error: { message }</h3>
            }
        </div>
    )
};

export default WeatherData;