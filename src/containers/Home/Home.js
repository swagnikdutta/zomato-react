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

	render(){
		let city = this.props.match.params.city;
		return (
			<div>
				<Banner bannerOpacity={0.5}>
					<SearchUtility city={city} />
				</Banner>
				<Collections restaurantCollections={this.props.restaurantCollections} city={city} padding={true} />
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