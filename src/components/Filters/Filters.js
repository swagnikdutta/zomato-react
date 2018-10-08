import React from 'react';
// import _ from 'lodash';

// components

import { filters as filtersConfig } from '../../config/filtersConfig';

import { Wrapper, FilterBy, FilterBlock } from './Style.js';

const filters = (props) => {

	let allFilters = [];
	populateFiltersConfig(props);

	Object.keys(filtersConfig).forEach((elem) => {
		let something = getFilterBlock(filtersConfig[elem]);
		allFilters.push(something);
	});
	
	return (
		<Wrapper>
			{allFilters}
		</Wrapper>
	);
};

const populateFiltersConfig = ({cuisines, restaurantCategories}) => {
	cuisines.forEach(elem => filtersConfig.cuisine.values.push(elem.cuisine));
	restaurantCategories.forEach(elem => filtersConfig.category.values.push(elem.categories));
}

const getFilterBlock = ({ label, values }) => {
	return (
		<FilterBlock>
			<FilterBy>{label}</FilterBy>
			<div className='checkbox-wrapper'>
				<input type="checkbox" name="" value="Bike" />
			</div>
		</FilterBlock>
	)
}

export default filters;