import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './index.css';

const Contact = () => {
    const history = useHistory();
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1>Contact</h1>
            <p>Hello there, { params.username ? params.username : null }!</p>
            <button onClick={() => history.push('/')}>Check Weather</button>
        </div>
    )
}

export default Contact;