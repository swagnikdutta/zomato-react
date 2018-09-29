import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Actions from '../../store/actions/actions';

//  Components
import Banner from '../../hoc/Banner/Banner';
import CollectedRestaurants from '../../components/CollectedRestaurants/CollectedRestaurants';
import Collections from '../../components/Collections/Collections';
import { Wrapper, BannerDetails, BannerWrapper, Title, Description } from './Style';

class Collection extends Component{
	constructor(props){
		super(props);
		this.state = {
			collectionId: null
		}
	}

	componentDidMount(){
		let collectionId = this.props.match.params.collectionId,
			city = this.props.match.params.city;

		updateStateWithCollectionId(this, collectionId, city);
	}

	componentWillReceiveProps(newProps){
		let newCollectionId = newProps.match.params.collectionId,
			city = newProps.match.params.city;

		if(this.state.collectionId !== newCollectionId){
			updateStateWithCollectionId(this, newCollectionId, city);
		}
	}

	render(){
		let bannerImageUrl 			= _.get(this.props, 'location.state.bannerImageUrl', ''),
			collectionTitle 		= _.get(this.props, 'location.state.collectionTitle', ''),
			collectionDescription 	= _.get(this.props, 'location.state.collectionDescription', ''),
			restaurantCollections	= _.get(this.props, 'location.state.restaurantCollections', []),
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

const updateStateWithCollectionId = (scope, id, city) => {
	scope.setState({
		collectionId: id
	}, () => {
		let filterParams = {
			collection_id: scope.state.collectionId,
			entity_type: 'city',
			city
		};
		scope.props.fetchFilteredRestaurants(filterParams);
	});
}

const mapStateToProps = state => {
    return {
    	filteredRestaurants: _.get(state, 'zomatoReducer.filteredRestaurants', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilteredRestaurants: (filterParams) => dispatch(Actions.fetchFilteredRestaurants(filterParams)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);