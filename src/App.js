import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// Containers
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/:city' component={Home} />
        <Route 
        	render = {() => (
        		<Redirect to={{pathname: "/bangalore"}} />
        	)}
			  />

      </div>
    );
  }
}

export default App;
