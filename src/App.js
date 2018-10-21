import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import './App.css';

// Loader Component
import Loader from './hoc/Loader/Loader';

// Containers
import Home from './containers/Home/Home';
import Collection from './containers/Collection/Collection';
import Restaurant from './containers/Restaurant/Restaurant';
import SearchResults from './containers/SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        
        <Route path='/' exact render = { () => <Redirect to='/bangalore' /> } />
        <Route path='/:city' exact component={Home} />
        <Route path='/:city/collection/:collectionId' exact component={Collection} />
        <Route path='/:city/restaurant/:restaurantId' exact component={Restaurant} />
        <Route path='/:city/restaurants' component={SearchResults} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state.zomatoReducer.loaderVisibility));
  return {
    loaderVisibility: _.get(state, 'zomatoReducer.loaderVisibility', false)
  };
}

export default connect(mapStateToProps)(App);
