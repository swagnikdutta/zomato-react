import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ActionHelpers from '../../store/actions/actionHelpers';

// Components
import Banner from '../../hoc/Banner/Banner';
import SearchUtility from '../../components/SearchUtility/SearchUtility';
import Collections from '../../components/Collections/Collections';

class Home extends Component{

	state = {
        
    }

	componentDidMount(){
		let city = this.props.match.params.city;
		
		this.props.fetchRestaurantCollections(city);
		// this.props.fetchCategories();
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
	console.log(JSON.stringify(state, undefined, 4));
	console.log("---");
    return {
        restaurantCollections: state.zomatoReducer.restaurantCollections,
        categories: state.zomatoReducer.categories
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantCollections: (city) => dispatch(ActionHelpers.fetchRestaurantCollections(city)),
        // fetchCategories: () => dispatch(ActionHelpers.fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);