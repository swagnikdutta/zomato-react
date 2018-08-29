import * as actionTypes from './actionTypes';
import ActionHelpers from './actionHelpers';

const _ = require('lodash');

export const fetchRestaurantCollections = (obj) => {
	return {
		type: actionTypes.FETCH_COLLECTIONS,
		...obj
	};
}

// export const fetchCategories = async () => {
// 	let categories = await ActionHelpers.fetchCategories();
// 	return {
// 		type: actionTypes.FETCH_CATEGORIES,
// 		categories: categories
// 	};
// }
