import { filters as filtersConfig } from '../../../config/filtersConfig';

const populateFiltersConfig = ({ cuisines, restaurantCategories }) => {
	cuisines.forEach(elem => {
		if(!filtersConfig.cuisines.values.includes(elem.cuisine)){
			filtersConfig.cuisines.values.push(elem.cuisine);
		}
	});

	restaurantCategories.forEach(elem => {
		if(!filtersConfig.category.values.includes(elem.categories)){
			filtersConfig.category.values.push(elem.categories);
		}
	});
}

export default {
	populateFiltersConfig
}