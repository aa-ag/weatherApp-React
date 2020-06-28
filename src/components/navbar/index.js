import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <Link to='/' className="navbar-brand mb-0 h1">Weather App</Link>
        <Link to='/shop' className="navbar-brand mb-0 h1">Shop</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
);

export default Navbar;

// Functional components render faster, because classes are heavier
// Which one to use depends on scalability needs