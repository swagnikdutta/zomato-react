import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';

// Components
import Banner from '../../hoc/Banner/Banner';

class Restaurant extends Component{

	componentDidMount(){
		let restaurantId = this.props.match.params.restaurantId;
		this.props.fetchRestaurantDetails(restaurantId);
	}

	render(){
		return (
			<div>
				Restaurant component
				<div>
					{JSON.stringify(this.props.restaurantDetails)}	
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
    	restaurantDetails: _.get(state, 'zomatoReducer.restaurantDetails.action.restaurantDetails', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantDetails: (restaurantId) => dispatch(Actions.fetchRestaurantDetails(restaurantId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);