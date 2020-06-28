import React from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherData from '../../components/weatherData'

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    }

    getWeather = e => {
        e.preventDefault(); // prevent page from reloading on submission

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value ? e.target.elements.country.value : 'US';
        const API_KEY = '406a4df3c98f39bd4ebf0ac2a891da6c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data })); // if the key set is == variable name, you can write it once (this.stat = {data: []}) up in class
    }

    render() {
        const { data } = this.state
        return (
            <div className="home">
                <WeatherTitle />
                <WeatherForm getWeather={this.getWeather} />
                <WeatherData data={data}/>
            </div>
        )
    }
};

export default Home;

// challenge: call API
// result: store inside data 

//  conditional (ternary) operator = return (isMember ? '$2.00' : '$10.00');