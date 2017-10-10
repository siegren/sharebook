import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './static/Home';
import About from './static/About';
import Books from './book/Books';

class App extends Component {
  render() {
    return (
    	<Switch>
		  <Route exact path='/' component={Home}/>
		  <Route path='/about' component={About}/>
		  <Route path='/books' component={Books}/>
		</Switch>
      // <DonorForm />
    );
  }
}

export default App;
