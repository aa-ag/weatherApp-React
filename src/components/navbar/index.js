import React from 'react';
import './index.css';

const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Weather App</span>
    </nav>
);

export default Navbar;

// Functional components render faster, because classes are heavier
// Which one to use depends on scalability needs