import React, { Component } from 'react';

import {Input, Button} from './Style';

class SearchUtility extends Component{
	state = {
		city: ''
	}

	handleChange = () => {
		debugger;
	}

	render(){
		let city = this.props.city;

		city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

		return (
			<div>
				<Input placeholder='Select city' value={city} location onChange={this.handleChange} />
				<Input placeholder='Search for restaurant or cuisines...' />
				<Button>Search</Button>
			</div>
		);
	}
}

export default SearchUtility;