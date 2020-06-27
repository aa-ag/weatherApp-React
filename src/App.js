import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
