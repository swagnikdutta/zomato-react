import React, { Component } from 'react';
import _ from 'lodash';

import { filters as filtersConfig } from '../../../config/filtersConfig';
import { updateObject } from '../../../store/utility';

import { Wrapper, Checkbox, Temp } from './Style.js';

class FilterBlock extends Component{

	state = {
		filterData: this.props.filterData,
		query: {
			cuisines: [],
			category: []
		}
	}

	onFilterApplied = (e) => {
		let { queryKey, uniqueId } = e.target.dataset;
		let clone = [...this.state.query[ queryKey ]];
		e.target.checked ? clone.push(uniqueId * 1) : clone.splice(clone.indexOf(uniqueId * 1), 1);

		let tempQuery = updateObject(this.state.query, { 
			[queryKey]: clone 
		});

		this.setState({ query: tempQuery }, () => {
			// generate query string
		});
	}
	
	render(){
		const { filterData } = this.state;
		const allCheckBoxes = filterData.values.map((param) => checkbox(param, filterData, this));

		return (
			<Wrapper>
				{allCheckBoxes}
			</Wrapper>
		)
	}
}

const checkbox = (param, filterData, scope) => {
	let name = param[filterData.path.name],
		uniqueId = param[filterData.path.id];

	return (
		<Temp key={`${filterData.label}_${uniqueId}`}>
			<Checkbox type="checkbox" 
				data-query-key={filterData.queryKey} 
				data-unique-id={uniqueId} 
				checked={scope.state.query[filterData.queryKey].includes(uniqueId)}
				onChange={(e) => scope.onFilterApplied(e)} /> 
			{name}
		</Temp>
	)
};

export default FilterBlock;
