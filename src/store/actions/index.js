import * as actionTypes from './actionTypes';

export const fetchRestaurantCollections = (city) => {
	return {
		type: actionTypes.FETCH_COLLECTIONS,
		city
	};
}

export const fetchCategories = () => {
	return {
		type: actionTypes.FETCH_CATEGORIES
	};
}