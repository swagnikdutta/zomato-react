import _ from 'lodash';

import { filters as filtersConfig } from '../../../config/filtersConfig';

const populateFiltersConfig = ({ cuisines, restaurantCategories }) => {
	cuisines.forEach(elem => filtersConfig.cuisine.values.push(elem.cuisine));
	restaurantCategories.forEach(elem => filtersConfig.category.values.push(elem.categories));
}

export default {
	populateFiltersConfig
}