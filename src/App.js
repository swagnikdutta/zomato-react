import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';

// Containers
import Home from './containers/Home/Home';
import Collection from './containers/Collection/Collection';
import Restaurant from './containers/Restaurant/Restaurant';
import SearchResults from './containers/SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact render = { () => <Redirect to='/bengaluru' /> } />
        <Route path='/:city' exact component={Home} />
        <Route path='/:city/collection/:collectionId' exact component={Collection} />
        <Route path='/:city/restaurant/:restaurantId' exact component={Restaurant} />
        <Route path='/:city/restaurants' component={SearchResults} />
      </div>
    );
  }
}

export default App;
