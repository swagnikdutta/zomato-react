import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

// Components
import Banner from '../../hoc/Banner/Banner';
import SearchUtility from '../../components/SearchUtility/SearchUtility';
import Collections from '../../components/Collections/Collections';

class Home extends Component{

	componentDidMount(){
		let city = this.props.match.params.city;
		
		this.props.fetchRestaurantCollections(city);
	}

	render(){
		let city = this.props.match.params.city;
		return (
			<div>
				<Banner>
					<SearchUtility city={city} />
				</Banner>
				<Collections />
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantCollections: (city) => dispatch(actions.fetchRestaurantCollections(city)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);