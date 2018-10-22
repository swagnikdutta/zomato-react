import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Actions from '../../store/actions/actions';

//  Components
import Loader from '../../hoc/Loader/Loader';
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

	async componentDidMount(){
		if(this.props.cityId === null){		// if some one changes the collection id in the url itself
			await this.props.getCityId(this.props.match.params.city);
		}

		let collectionId = this.props.match.params.collectionId,
			cityId = this.props.cityId;
		
		updateStateWithCollectionId(this, collectionId, cityId);
	}

	componentWillReceiveProps(newProps){
		let newCollectionId = newProps.match.params.collectionId,
			cityId = newProps.cityId;

		if(this.state.collectionId !== newCollectionId){
			updateStateWithCollectionId(this, newCollectionId, cityId);
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
				{this.props.loaderVisibility ? <Loader /> : null}
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

const updateStateWithCollectionId = (scope, id, cityId) => {
	scope.setState({
		collectionId: id
	}, () => {
		let filterParams = {
			collection_id: scope.state.collectionId,
			entity_type: 'city',
			entity_id: cityId
		};
		scope.props.fetchFilteredRestaurants(filterParams);
	});
}

const mapStateToProps = state => {
    return {
    	cityId: _.get(state, 'zomatoReducer.cityId', null),
    	filteredRestaurants: _.get(state, 'zomatoReducer.filteredRestaurants', []),
    	loaderVisibility: _.get(state, 'zomatoReducer.loaderVisibility', false)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFilteredRestaurants: (filterParams) => dispatch(Actions.fetchFilteredRestaurants(filterParams)),
        getCityId: (city) => dispatch(Actions.getCityId(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);