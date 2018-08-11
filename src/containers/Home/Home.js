import React, { Component } from 'react';
import './Home.css';
import classes from './Home.css';

class Home extends Component{
	render(){
		return (
			<div className={classes.Temp}>
				This is the home component
			</div>
		)
	}
}

export default Home;