import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';

import classes from './Style.css';

// Components
import Filters from '../../components/Filters/Filters';
import FetchedResults from '../../components/FetchedResults/FetchedResults';

import { Wrapper } from './Style';

class SearchResults extends Component{

	async componentDidMount(){
		let cityId = this.props.location.state.cityId,
			searchParams = {};

		await this.props.fetchCuisinesInCity(cityId);
		
		if(this.props.location.state.searchType === 'cuisine'){
			let cuisine = this.props.location.state.searchQuery,
				cuisineId = this.getCuisineId(cuisine);

			searchParams = {
				entity_id: cityId,
				entity_type: 'city',
				cuisines: cuisineId
			};
		} else if(this.props.location.state.searchType === 'restaurant') {
			let restaurant = this.props.location.state.searchQuery;

			searchParams = {
				entity_id: cityId,
				entity_type: 'city',
				q: restaurant
			};
		}
		this.props.fetchSearchResults(searchParams);
	}

	getCuisineId = (cuisine) => _.get(
		_.find(this.props.cuisines, (elem) => elem.cuisine.cuisine_name.toLowerCase() === cuisine), 
		'cuisine.cuisine_id',
		null
	);

	render(){
		return (
			<Wrapper>
				<div className={classes.filters}>
					<Filters />
				</div>
				<div className={classes.results}>
					<FetchedResults restaurants={this.props.searchResults} />
				</div>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
    return {
    	cuisines: _.get(state, 'zomatoReducer.cuisines', []),
    	searchResults: _.get(state, 'zomatoReducer.searchResults', [])
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCuisinesInCity: (cityId) => dispatch(Actions.fetchCuisinesInCity(cityId)),
        fetchSearchResults: (searchParams) => dispatch(Actions.fetchSearchResults(searchParams))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);