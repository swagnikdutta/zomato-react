import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../store/actions/actions';

// Components
import Banner from '../../hoc/Banner/Banner';
import SearchUtility from '../../components/SearchUtility/SearchUtility';
import Collections from '../../components/Collections/Collections';

class Home extends Component{

	componentDidMount(){
		let city = this.props.match.params.city;
		this.props.fetchRestaurantCollections(city);
		this.props.fetchRestaurantCategories();
	}

	render(){
		let city = this.props.match.params.city;
		return (
			<div>
				<Banner>
					<SearchUtility city={city} />
				</Banner>
				<Collections restaurantCollections={this.props.restaurantCollections} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	// console.log(JSON.stringify(state));
    return {
        restaurantCollections: state.zomatoReducer.restaurantCollections,
        categories: state.zomatoReducer.categories
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantCollections: (city) => dispatch(Actions.fetchRestaurantCollections(city)),
        fetchRestaurantCategories: () => dispatch(Actions.fetchRestaurantCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);