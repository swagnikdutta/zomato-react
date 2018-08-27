import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import ZomatoService from '../../Services/ZomatoService';

const _ = require('lodash');

const initialState = {
	restaurantCollections: []
};

const fetchRestaurantCollections = async (state, action) => {
	let {city} = action, cityId, 
		cityDetails, restaurantCollections;

	cityDetails = await ZomatoService.getCityDetails(city).catch((e) => {
		console.log(`There was an error fetching city details for: ${city}`);
	});
	cityId = _.get(cityDetails, 'data.location_suggestions[0].id');
	restaurantCollections = await ZomatoService.fetchRestaurantCollections(cityId).catch((e) => {
		console.log(`There was an error fetching restaurant collections in: ${city}`);
	});
	restaurantCollections = _.get(restaurantCollections, 'data.collections');
	
	return updateObject(state, { restaurantCollections });
}

const fetchCategories = () => {
	return {};
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_COLLECTIONS: return fetchRestaurantCollections(state, action);
		case actionTypes.FETCH_CATEGORIES: return fetchCategories();
		default: return state;
	}
};

export default reducer;