import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './static/Home';
import About from './static/About';

class App extends Component {
  render() {
    return (
    	<Switch>
		  <Route exact path='/' component={Home}/>
		  <Route path='/about' component={About}/>
		</Switch>
      // <DonorForm />
    );
  }
}

export default App;
