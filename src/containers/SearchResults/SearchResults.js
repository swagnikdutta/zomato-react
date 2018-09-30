import React, { Component } from 'react';
import { connect } from 'react-redux'; 
// import _ from 'lodash';

// import Actions from '../../store/actions/actions';

import classes from './Style.css';

// Components


import { Wrapper } from './Style';

class SearchResults extends Component{

	componentDidMount(){

		debugger;
		let city = this.props.match.params.city;
		this.props.fetchCuisinesInCity()
		let searchParams = {
			// city: 
		}
		// city => cityid or entity id
		// entity type => city
		// q => restaurant className


		// this.props.fetchSearchResults();
	}

	render(){

		return (
			<Wrapper>
				<div className={classes.filters}>
					
				</div>
				<div className={classes.results}>
					
				</div>
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