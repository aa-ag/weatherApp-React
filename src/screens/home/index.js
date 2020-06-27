import React from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
            // fetch().then().then()
            // await async functions
        };
    }

    getWeather = e => {
        e.preventDefault(); // prevent page from reloading on submission

        const city = e.target.elements.city.value;

        //  conditional (ternary) operator = return (isMember ? '$2.00' : '$10.00');

        const country = e.target.elements.country.value ? e.target.elements.country.value : 'US';

        console.log(city, country)
    }

    render() {
        return (
            <div className="home">
                <WeatherTitle />
                <WeatherForm getWeather={this.getWeather} />
            </div>
        )
    }
};

export default Home;

// challenge: call API
// result: store inside data 