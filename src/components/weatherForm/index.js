import React from 'react';
import './index.css';

const WeatherForm = ({ getWeather }) => (
    <form className="weather-form" onSubmit={getWeather} >
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <input type="submit" value="Get Weather" />
    </form>
);

export default WeatherForm;