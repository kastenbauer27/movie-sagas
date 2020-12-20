import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
