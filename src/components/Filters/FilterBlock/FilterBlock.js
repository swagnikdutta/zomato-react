import React, { Component } from 'react';
import _ from 'lodash';

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

	generateQueryString = (queryObj) => {
		let queryString = '';

		Object.keys(queryObj).forEach((key) => {
			if(!queryObj[key].length) 
				return;
			
			queryString += `${key}=${queryObj[key].join(',')}`;
		});

		return queryString;
	}

	onFiltersUpdated = (e) => {
		let { queryKey, uniqueId } = e.target.dataset;
		let clone = [...this.state.query[ queryKey ]];
		e.target.checked ? clone.push(uniqueId * 1) : clone.splice(clone.indexOf(uniqueId * 1), 1);

		let tempQuery = updateObject(this.state.query, { 
			[queryKey]: clone 
		});

		this.setState({ query: tempQuery }, () => {
			let filterQueryString = this.generateQueryString({...this.state.query});
			this.props.onFiltersUpdated(filterQueryString);
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
				onChange={(e) => scope.onFiltersUpdated(e)} /> 
			{name}_{uniqueId}
		</Temp>
	)
};

export default FilterBlock;
