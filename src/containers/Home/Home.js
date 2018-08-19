import React, { Component } from 'react';
import './Home.css';
import classes from './Home.css';

// Components
import Banner from '../../hoc/Banner/Banner';
import SearchUtility from '../../components/SearchUtility/SearchUtility';

class Home extends Component{

	render(){
		let city = this.props.match.params.city;
		return (
			<div>
				<Banner>
					<SearchUtility city={city} />
				</Banner>
				
				We are in home component outside banner component
			</div>
		)
	}
}

export default Home;