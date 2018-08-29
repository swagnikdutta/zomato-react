import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	restaurantCollections: [],
	categories: [],
};

const fetchRestaurantCollections = (state, action) => {
	let restaurantCollections = {action}
	return updateObject(state, {
		restaurantCollections
	});
}

const fetchCategories = (state) => {

}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_COLLECTIONS: {
			return fetchRestaurantCollections(state, action);
		}
		case actionTypes.FETCH_CATEGORIES: {
			return fetchCategories(state);
		}
		default: return state;
	}
};

export default reducer;