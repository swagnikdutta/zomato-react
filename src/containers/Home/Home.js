import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

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

	handleSearchEvent = ({city, searchType, searchQuery}) => {
		debugger;
		// dispatch action from here
	}

	render(){
		let city = this.props.match.params.city;
		return (
			<div>
				<Banner bannerOpacity={0.5}>
					<SearchUtility city={city} onSearchEventFired={(searchData) => this.handleSearchEvent(searchData)} />
				</Banner>
				<Collections restaurantCollections={this.props.restaurantCollections} city={city} renderSource={'Home'} />
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
    	restaurantCollections: _.get(state, 'zomatoReducer.restaurantCollections', []),
    	restaurantCategories: _.get(state, 'zomatoReducer.restaurantCategories', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantCollections: (city) => dispatch(Actions.fetchRestaurantCollections(city)),
        fetchRestaurantCategories: () => dispatch(Actions.fetchRestaurantCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);