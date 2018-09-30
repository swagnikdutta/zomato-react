import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import _ from 'lodash';

import Actions from '../../store/actions/actions';

// Components
import Banner from '../../hoc/Banner/Banner';
import SearchUtility from '../../components/SearchUtility/SearchUtility';
import Collections from '../../components/Collections/Collections';

class Home extends Component{

	async componentDidMount(){
		let city = this.props.match.params.city;
		
		await this.props.getCityId(city);
		this.props.fetchRestaurantCollections(this.props.cityId);
		this.props.fetchRestaurantCategories();
	}

	handleSearchEvent = ({city, searchType, searchQuery}) => {
		let pathname = `/${city.toLowerCase()}` + (searchQuery ? `/restaurants/${searchQuery}` : ''),
			navigateObj = {
				pathname,
			};

			if(searchQuery){
				navigateObj.state = { searchType, searchQuery }
			}
			
		this.props.history.push(navigateObj);
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
    	cityId: _.get(state, 'zomatoReducer.cityId', null),
    	restaurantCollections: _.get(state, 'zomatoReducer.restaurantCollections', []),
    	restaurantCategories: _.get(state, 'zomatoReducer.restaurantCategories', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
    	getCityId: (city) => dispatch(Actions.getCityId(city)),
        fetchRestaurantCollections: (cityId) => dispatch(Actions.fetchRestaurantCollections(cityId)),
        fetchRestaurantCategories: () => dispatch(Actions.fetchRestaurantCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));