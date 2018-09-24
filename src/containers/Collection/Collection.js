import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Actions from '../../store/actions/actions';

//  Components
import Banner from '../../hoc/Banner/Banner';
import CollectedRestaurants from '../../components/CollectedRestaurants/CollectedRestaurants';
import Collections from '../../components/Collections/Collections';
import { Wrapper, BannerDetails, BannerWrapper, Title, Description } from './Style';

const queryString = require('query-string');

class Collection extends Component{

	componentDidMount(){
		let collectionId = this.props.match.params.collectionId,
			searchQuery = queryString.stringify({
				collection_id : collectionId
			});

		this.props.fetchFilteredRestaurants(searchQuery);
	}

	render(){
		let bannerImageUrl 			= this.props.location.state.bannerImageUrl,
			collectionTitle 		= this.props.location.state.collectionTitle,
			collectionDescription 	= this.props.location.state.collectionDescription,
			restaurantCollections	= this.props.location.state.restaurantCollections,
			city					= this.props.match.params.city,
			bannerHeight 			= '300px';

		return (
			<Wrapper>
				<BannerWrapper>
					<Banner bannerImageUrl={bannerImageUrl} bannerHeight={bannerHeight} />
					<BannerDetails>
						<Title>{collectionTitle}</Title>
						<Description>{collectionDescription}</Description>
					</BannerDetails>
				</BannerWrapper>
				<CollectedRestaurants city={city} restaurants={this.props.filteredRestaurants}></CollectedRestaurants>
				<Collections restaurantCollections={restaurantCollections} city={city} renderSource={'Collection'} />
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
    return {
    	filteredRestaurants: _.get(state, 'zomatoReducer.filteredRestaurants', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilteredRestaurants: (searchQuery) => dispatch(Actions.fetchFilteredRestaurants(searchQuery)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);