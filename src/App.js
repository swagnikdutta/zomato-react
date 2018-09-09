import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// Containers
import Home from './containers/Home/Home';
import Collection from './containers/Collection/Collection';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact render = { () => <Redirect to='/bangalore' /> } />
        <Route path='/:city' exact component={Home} />
        <Route path='/:city/collection/:collectionId' exact component={Collection} />
      </div>
    );
  }
}

export default App;
