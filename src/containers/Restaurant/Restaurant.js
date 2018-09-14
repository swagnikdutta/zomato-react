import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';

// Components
import Banner from '../../hoc/Banner/Banner';

class Restaurant extends Component{

	componentDidMount(){
		// let city = this.props.match.params.city;
		// this.props.fetchRestaurantCollections(city);
	}

	render(){
		return (
			<div>
				Restaurant component
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
    	// filteredRestaurants: _.get(state, 'zomatoReducer.filteredRestaurants.action.filteredRestaurants', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchFilteredRestaurants: (searchQuery) => dispatch(Actions.fetchFilteredRestaurants(searchQuery)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);