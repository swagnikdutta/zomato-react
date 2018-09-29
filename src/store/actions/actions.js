import ZomatoService from '../../services/ZomatoService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');
const queryString = require('query-string');

const fetchRestaurantCollections = (city) => async (dispatch) => {
	let	cityId, 
		cityDetails, 
		restaurantCollections;

	cityDetails = await ZomatoService.getCityDetails(city).catch((e) => {
		console.log(`There was an error fetching city details for: ${city}`);
	});
	cityId = _.get(cityDetails, 'data.location_suggestions[0].id');
	restaurantCollections = await ZomatoService.fetchRestaurantCollections(cityId).catch((e) => {
		console.log(`There was an error fetching restaurant collections in: ${city}`);
	});

	dispatch({
		type: actionTypes.FETCH_COLLECTIONS,
		restaurantCollections: _.get(restaurantCollections, 'data.collections')
	});
}

const fetchRestaurantCategories = () => async (dispatch) => {
	let restaurantCategories = await ZomatoService.fetchRestaurantCategories().catch((e) => {
		console.log('There was an error fetching categories or restaurant types.')
	});

	dispatch({
		type: actionTypes.FETCH_CATEGORIES,
		restaurantCategories: _.get(restaurantCategories, 'data.categories')
	});
}

const fetchFilteredRestaurants = (filterParams) => async (dispatch) => {
	let	cityId, 
		cityDetails, 
		searchQuery;

	cityDetails = await ZomatoService.getCityDetails(filterParams.city).catch((e) => {
		console.log(`There was an error fetching city details for: ${filterParams.city}`);
	});
	cityId = _.get(cityDetails, 'data.location_suggestions[0].id');

	filterParams.entity_id = cityId;
	delete filterParams.city;
	
	searchQuery = queryString.stringify(filterParams);

	let filteredRestaurants = await ZomatoService.fetchFilteredRestaurants(searchQuery).catch((e) => {
		console.log('There was an error fetching filtered list of restaurants.');
	});

	dispatch({
		type: actionTypes.FETCH_FILTERED_RESTAURANTS,
		filteredRestaurants: _.get(filteredRestaurants, 'data.restaurants')
	});
}

const fetchRestaurantDetails = (restaurantId) => async (dispatch) => {
	const restaurantDetailsPromise = ZomatoService.fetchRestaurantDetails(restaurantId).catch((e) => {
		console.log(`There was an error fetching restaurant details. Restaurant Id: ${restaurantId}`);
	});
	const restaurantReviewsPromise = ZomatoService.fetchRestaurantReviews(restaurantId).catch((e) => {
		console.log(`There was an error fetching restaurant reviews. Restaurant Id: ${restaurantId}`);
	});

	dispatch({
		type: actionTypes.FETCH_RESTAURANT_DETAILS,
		data: {
			restaurantDetails: _.get(await restaurantDetailsPromise, 'data'),
			restaurantReviews: _.get(await restaurantReviewsPromise, 'data'),
		}
	});
}

export default {
	fetchRestaurantCollections,
	fetchRestaurantCategories,
	fetchFilteredRestaurants,
	fetchRestaurantDetails,
}