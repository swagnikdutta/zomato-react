import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	cityId: null,
	restaurantCollections: [],
	restaurantCategories: [],
	filteredRestaurants: [],
	restaurantDetails: {},
	restaurantReviews: {},
	cuisines: [],
	searchResults: [],
	loaderVisibility: false,
};

const showLoader 					= (state) => updateObject(state, { loaderVisibility: true });
const hideLoader 					= (state) => updateObject(state, { loaderVisibility: false });
const getCityId 					= (state, { cityId }) => updateObject(state, { cityId });
const fetchRestaurantCollections 	= (state, { restaurantCollections }) => updateObject(state, { restaurantCollections });
const fetchRestaurantCategories 	= (state, { restaurantCategories }) => updateObject(state, { restaurantCategories });
const fetchFilteredRestaurants 		= (state, { filteredRestaurants }) => updateObject(state, { filteredRestaurants });
const fetchCuisinesInCity 			= (state, { cuisines }) => updateObject(state, { cuisines });
const fetchSearchResults 			= (state, { searchResults }) => updateObject(state, { searchResults });
const fetchRestaurantDetails 		= (state, { data: { restaurantDetails }}, { data: { restaurantReviews }}) => updateObject(state, { restaurantDetails, restaurantReviews });

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_CITY_ID: {
			return getCityId(state, action);
		}
		case actionTypes.FETCH_COLLECTIONS: {
			return fetchRestaurantCollections(state, action);
		}
		case actionTypes.FETCH_CATEGORIES: {
			return fetchRestaurantCategories(state, action);
		}
		case actionTypes.FETCH_FILTERED_RESTAURANTS: {
			return fetchFilteredRestaurants(state, action);
		}
		case actionTypes.FETCH_RESTAURANT_DETAILS: {
			return fetchRestaurantDetails(state, action, action);
		}
		case actionTypes.FETCH_CUISINES: {
			return fetchCuisinesInCity(state, action);
		}
		case actionTypes.FETCH_SEARCH_RESULTS: {
			return fetchSearchResults(state, action);
		}
		case actionTypes.SHOW_LOADER: {
			return showLoader(state);
		}
		case actionTypes.HIDE_LOADER: {
			return hideLoader(state);
		}
		default: return state;
	}
};

export default reducer;