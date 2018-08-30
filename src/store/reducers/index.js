import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	restaurantCollections: [],
	restaurantCategories: [],
};

const fetchRestaurantCollections = (state, action) => {
	return updateObject(state, {
		restaurantCollections: {action}
	});
}

const fetchRestaurantCategories = (state, action) => {
	return updateObject(state, {
		restaurantCategories: {action}
	})
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_COLLECTIONS: {
			return fetchRestaurantCollections(state, action);
		}
		case actionTypes.FETCH_CATEGORIES: {
			return fetchRestaurantCategories(state, action);
		}
		default: return state;
	}
};

export default reducer;