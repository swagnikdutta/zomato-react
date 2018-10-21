import ZomatoService from '../../services/ZomatoService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');
const queryString = require('query-string');

const getCityId = (city) => async (dispatch) => {
	let cityDetails;

	cityDetails = await ZomatoService.getCityDetails(city).catch((e) => {
		console.log(`There was an error fetching city details for: ${city}`);
	});

	dispatch({
		type: actionTypes.FETCH_CITY_ID,
		cityId: _.get(cityDetails, 'data.location_suggestions[0].id')
	});
}

const fetchRestaurantCollections = (cityId) => async (dispatch) => {
	let	restaurantCollections;

	restaurantCollections = await ZomatoService.fetchRestaurantCollections(cityId).catch((e) => {
		console.log(`There was an error fetching restaurant collections for cityId: ${cityId}`);
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
	let	searchQuery = queryString.stringify(filterParams);

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

const fetchCuisinesInCity = (cityId) => async (dispatch) => {
	const cuisines = await ZomatoService.fetchCuisinesInCity(cityId).catch((e) => {
		console.log(`There was an error fetching cuisines for cityId: ${cityId}`);
	});

	dispatch({
		type: actionTypes.FETCH_CUISINES,
		cuisines: _.get(cuisines, 'data.cuisines')
	});
}

const fetchSearchResults = (searchParams) => async (dispatch) => {
	let searchQuery = queryString.stringify(searchParams, { encode: false });
	
	let searchResults = await ZomatoService.fetchFilteredRestaurants(searchQuery).catch((e) => {
		console.log(`There was an error fetching search results for query: ${searchQuery}`);
	});
	
	dispatch({
		type: actionTypes.FETCH_SEARCH_RESULTS,
		searchResults: _.get(searchResults, 'data.restaurants')
	});
}

export default {
	getCityId,
	fetchRestaurantCollections,
	fetchRestaurantCategories,
	fetchFilteredRestaurants,
	fetchRestaurantDetails,
	fetchCuisinesInCity,
	fetchSearchResults
}