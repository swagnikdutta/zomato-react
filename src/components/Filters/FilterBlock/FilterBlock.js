import React from 'react';
import _ from 'lodash';

import { filters as filtersConfig } from '../../../config/filtersConfig';

import { Wrapper, Checkbox, Temp } from './Style.js';

const filterBlock = ({ filterData }) => {
	const allCheckBoxes = filterData.values.map((param) => checkbox(param, filterData));

	return (
		<Wrapper>
			{allCheckBoxes}
		</Wrapper>
	)
};

const checkbox = (param, filterData) => {
	
	let name = param[filterData.path.name],
		uniqueId = param[filterData.path.id];

	return (
		<Temp key={`${filterData.label}_${uniqueId}`}>
			<Checkbox type="checkbox" value={name} data-unique-id={uniqueId} /> 
			{name}
		</Temp>
	)
};

export default filterBlock;