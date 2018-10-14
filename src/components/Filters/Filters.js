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

	handleUpdatedFilters(filterQueryString){
		this.props.onFiltersUpdated(filterQueryString);
	}

	render(){
		let filters = Object.values(filtersConfig).map((categoryFilter) => 
			<FilterBlock 
				onFiltersUpdated={ (filterQueryString) => this.handleUpdatedFilters(filterQueryString) } 
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