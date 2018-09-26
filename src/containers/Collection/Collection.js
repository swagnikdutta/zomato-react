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
	constructor(props){
		super(props);
		this.state = {
			collectionId: null
		}
	}

	componentDidMount(){
		let collectionId = this.props.match.params.collectionId;
		updateStateWithCollectionId(this, collectionId);
	}

	componentWillReceiveProps(newProps){
		let newCollectionId = newProps.match.params.collectionId;
		if(this.state.collectionId !== newCollectionId){
			updateStateWithCollectionId(this, newCollectionId);
		}
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

const updateStateWithCollectionId = (scope, id) => {
	scope.setState({
		collectionId: id
	}, () => {
		let searchQuery = queryString.stringify({
			collection_id: scope.state.collectionId
		});
		scope.props.fetchFilteredRestaurants(searchQuery);
	});
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