import ZomatoService from '../../Services/ZomatoService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');
const queryString = require('query-string');

const getCityId = (city) => async (dispatch) => {
	showLoader(dispatch);
	
	let cityDetails = await ZomatoService.getCityDetails(city).catch((e) => {
		console.log(`There was an error fetching city details for: ${city}`);
	});

	dispatch({
		type: actionTypes.FETCH_CITY_ID,
		cityId: _.get(cityDetails, 'data.location_suggestions[0].id')
	});

	hideLoader(dispatch);
}

const fetchRestaurantCollections = (cityId) => async (dispatch) => {
	showLoader(dispatch);

	let restaurantCollections = await ZomatoService.fetchRestaurantCollections(cityId).catch((e) => {
		console.log(`There was an error fetching restaurant collections for cityId: ${cityId}`);
	});

	dispatch({
		type: actionTypes.FETCH_COLLECTIONS,
		restaurantCollections: _.get(restaurantCollections, 'data.collections')
	});

	hideLoader(dispatch);
}

const fetchRestaurantCategories = () => async (dispatch) => {
	showLoader(dispatch);

	let restaurantCategories = await ZomatoService.fetchRestaurantCategories().catch((e) => {
		console.log('There was an error fetching categories or restaurant types.')
	});

	dispatch({
		type: actionTypes.FETCH_CATEGORIES,
		restaurantCategories: _.get(restaurantCategories, 'data.categories')
	});

	hideLoader(dispatch);
}

const fetchFilteredRestaurants = (filterParams) => async (dispatch) => {
	showLoader(dispatch);

	let	searchQuery = queryString.stringify(filterParams);
	let filteredRestaurants = await ZomatoService.fetchFilteredRestaurants(searchQuery).catch((e) => {
		console.log('There was an error fetching filtered list of restaurants.');
	});

	dispatch({
		type: actionTypes.FETCH_FILTERED_RESTAURANTS,
		filteredRestaurants: _.get(filteredRestaurants, 'data.restaurants')
	});

	hideLoader(dispatch);
}

const fetchRestaurantDetails = (restaurantId) => async (dispatch) => {
	showLoader(dispatch);

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

	hideLoader(dispatch);
}

const fetchCuisinesInCity = (cityId) => async (dispatch) => {
	showLoader(dispatch);

	const cuisines = await ZomatoService.fetchCuisinesInCity(cityId).catch((e) => {
		console.log(`There was an error fetching cuisines for cityId: ${cityId}`);
	});

	dispatch({
		type: actionTypes.FETCH_CUISINES,
		cuisines: _.get(cuisines, 'data.cuisines')
	});

	hideLoader(dispatch);
}

const fetchSearchResults = (searchParams) => async (dispatch) => {
	showLoader(dispatch);

	let searchQuery = queryString.stringify(searchParams, { encode: false });
	let searchResults = await ZomatoService.fetchFilteredRestaurants(searchQuery).catch((e) => {
		console.log(`There was an error fetching search results for query: ${searchQuery}`);
	});
	
	dispatch({
		type: actionTypes.FETCH_SEARCH_RESULTS,
		searchResults: _.get(searchResults, 'data.restaurants')
	});

	hideLoader(dispatch);
}

const showLoader = (dispatch) => {
	dispatch({ type: actionTypes.SHOW_LOADER });
}

const hideLoader = (dispatch) => {
	dispatch({ type: actionTypes.HIDE_LOADER });
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