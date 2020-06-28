import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './screens/home';
import Contact from './screens/contact';
import Colors from './screens/colors';
import Shop from './screens/shop';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        { name: 'Hat', id: 1, description: 'Something you wear on your head.'},
        { name: 'Lamp', id: 2, description: 'Lights up your life.'},
        { name: 'CMS Hub', id: 3, description: 'Content management subscription.'}
      ]
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/home' render={() => <Home />} />
            <Route exact path='/contact' render={() => <Contact />} />
            <Route path='/contact/:username' render={() => <Contact />} />
            <Route path='/colors/:red/:green/:blue' render={() => <Colors />} />
            <Route exact path='/shop' render={() => <Shop items={items} />} />
            <Route path='/shop/:id' render={() => <Shop items={items} />} />
            <Route path='*' render={() => <h3>Page does not exist.</h3>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
