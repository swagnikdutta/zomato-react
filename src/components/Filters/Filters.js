import React, { Component } from 'react';

import { filters as filtersConfig } from '../../config/filtersConfig';
import Helpers from './Helpers/Helpers';

// Components
import FilterBlock from './FilterBlock/FilterBlock';
import { Wrapper } from './Style.js';

class Filters extends Component {

	componentWillReceiveProps(newProps){
		if(JSON.stringify(newProps) !== JSON.stringify(this.props)){
			Helpers.populateFiltersConfig(newProps);
		}
	}

	shouldComponentUpdate(newProps){
		return JSON.stringify(newProps) !== JSON.stringify(this.props);
	}

	handleUpdatedFilters(filterQueryString, queryKey){
		this.props.onFiltersUpdated(filterQueryString, queryKey);
	}

	render(){
		let filters = Object.values(filtersConfig).map((categoryFilter) => 
			<FilterBlock 
				onFiltersUpdated={ (filterQueryString, queryKey) => this.handleUpdatedFilters(filterQueryString, queryKey) } 
				filterData={categoryFilter} 
				key={categoryFilter.label} /> );

		return (
			<Wrapper>
				{filters}
			</Wrapper>
		)
	}
}

export default Filters;