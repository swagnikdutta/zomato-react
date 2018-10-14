import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';
import classes from './Style.css';
// Components
import Filters from '../../components/Filters/Filters';
import FetchedResults from '../../components/FetchedResults/FetchedResults';
import { Wrapper } from './Style';
// Config
import { filters as filtersConfig } from '../../config/filtersConfig';

const qs = require('query-string');

class SearchResults extends Component{
	state = {
		searchParams: {}
	}

	async componentDidMount(){
		let cityId = this.props.location.state.cityId,
			searchParams = {};
		
		this.props.fetchRestaurantCategories();
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
		} else {
			searchParams = {
				entity_id: cityId,
				entity_type: 'city'
			}
		}

		this.setState({ searchParams }, () => this.props.fetchSearchResults(searchParams));
	}

	getCuisineId = (cuisine) => _.get(
		_.find(this.props.cuisines, (elem) => elem.cuisine.cuisine_name.toLowerCase() === cuisine), 
		'cuisine.cuisine_id',
		null
	);

	handleUpdatedFilters = (filterQueryString) => {
		let clone = {...this.state.searchParams},
			filterQueryObj = qs.parse(filterQueryString);

		for(var key in filterQueryObj){
			let temp = filtersConfig[key].uri_encode ? filterQueryObj[key].split(',').join('%2C') : filterQueryObj[key];
			_.extend(clone, { [key]: temp });
		}

		this.setState({ searchParams: clone }, () => {
			console.log(`Updated search params: \n${JSON.stringify(this.state.searchParams, undefined, 4)}`);
			this.props.fetchSearchResults(this.state.searchParams);
		});		
	}

	render(){
		return (
			<Wrapper>
				<div className={classes.filters}>
					<Filters 
						cuisines={this.props.cuisines} 
						onFiltersUpdated={(filterQueryString) => { this.handleUpdatedFilters(filterQueryString) }}
						restaurantCategories={this.props.restaurantCategories} />
				</div>
				<div className={classes.results}>
					<FetchedResults restaurants={this.props.searchResults} city={this.props.match.params.city} />
				</div>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
    return {
    	cuisines: _.get(state, 'zomatoReducer.cuisines', []),
    	searchResults: _.get(state, 'zomatoReducer.searchResults', []),
    	restaurantCategories: _.get(state, 'zomatoReducer.restaurantCategories', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCuisinesInCity: (cityId) => dispatch(Actions.fetchCuisinesInCity(cityId)),
        fetchSearchResults: (searchParams) => dispatch(Actions.fetchSearchResults(searchParams)),
        fetchRestaurantCategories: () => dispatch(Actions.fetchRestaurantCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);