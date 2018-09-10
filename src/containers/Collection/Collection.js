import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../store/actions/actions';

//  Components
import Banner from '../../hoc/Banner/Banner';

class Collection extends Component{

	componentDidMount(){
		let collectionId = this.props.match.params.collectionId;
	}

	render(){
		let bannerImageUrl = this.props.location.state.bannerImageUrl;
		return (
			<div>
				<Banner bannerImageUrl={bannerImageUrl} />
				Banner description component here
				This is Collection Component
			</div>
		);
	}

}

const mapStateToProps = state => {
    return {
    	// restaurantCollections: _.get(state, 'zomatoReducer.restaurantCollections.action.restaurantCollections', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchRestaurantCollections: (city) => dispatch(Actions.fetchRestaurantCollections(city)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);