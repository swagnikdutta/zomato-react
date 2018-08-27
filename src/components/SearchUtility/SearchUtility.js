import React, { Component } from 'react';

import {Input, Button, Checkbox, Wrapper} from './Style';

class SearchUtility extends Component{
	state = {
		city: ''
	};

	componentWillMount(){
		let city = this.props.city;

		city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
		this.setState({
			city
		});
	}

	handleChange = (event) => {
		this.setState({
			city: event.target.value
		});
	}

	handleSubmit = (event) => {

	}

	render(){
		return (
			<div>
				<Input placeholder='Select city' value={this.state.city} onChange={this.handleChange} location />
				<Input placeholder='Search for restaurant or cuisines...' />
				<Button onClick={this.handleSubmit}>Search</Button>
				<Wrapper>
					<Checkbox type="checkbox" value="restaurant" checked />Search by restaurant
					<Checkbox type="checkbox" value="cuisine" />Search by cuisine
				</Wrapper>
				
				
			</div>
		);
	}
}

export default SearchUtility;