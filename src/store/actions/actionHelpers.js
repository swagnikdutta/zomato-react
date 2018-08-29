import ZomatoService from '../../services/ZomatoService';
import * as actions from './index';

const _ = require('lodash');

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

	dispatch(actions.fetchRestaurantCollections({
		restaurantCollections: _.get(restaurantCollections, 'data.collections')
	}));
}

// const fetchCategories = async () => {
// 	let categories = await ZomatoService.fetchCategories().catch((e) => {
// 		console.log('There was an error fetching categories or restaurant types.')
// 	});
// 	return _.get(categories, 'data.categories');
// }

export default {
	fetchRestaurantCollections,
	// fetchCategories
}