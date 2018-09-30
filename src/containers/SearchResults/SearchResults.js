import React, { Component } from 'react';
import { connect } from 'react-redux'; 
// import _ from 'lodash';

// import Actions from '../../store/actions/actions';

// Components

import { Wrapper } from './Style';

class SearchResults extends Component{

	componentDidMount(){
		debugger;
	}

	render(){

		return (
			<Wrapper>
				this is search Results component
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
    return {
    	// restaurantDetails: _.get(state, 'zomatoReducer.restaurantDetails', {}),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchRestaurantDetails: (restaurantId) => dispatch(Actions.fetchRestaurantDetails(restaurantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);