import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';

import classes from './Style.css';

// Components


import { Wrapper } from './Style';

class SearchResults extends Component{

	async componentDidMount(){
		let cityId = this.props.location.state.cityId;
		await this.props.fetchCuisinesInCity(cityId);
		
		// this.props.cuisines
		// let searchParams = {
		// 	// city: 
		// }
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
    	cuisines: _.get(state, 'zomatoReducer.cuisines', [])
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCuisinesInCity: (cityId) => dispatch(Actions.fetchCuisinesInCity(cityId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);