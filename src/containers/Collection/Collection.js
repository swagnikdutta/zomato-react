import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from '../../store/actions/actions';

//  Components
import Banner from '../../hoc/Banner/Banner';
import { Wrapper, BannerDetails, BannerWrapper, Title, Description } from './Style';

class Collection extends Component{

	componentDidMount(){
		let collectionId = this.props.match.params.collectionId;
	}

	render(){
		let bannerImageUrl 			= this.props.location.state.bannerImageUrl,
			collectionTitle 		= this.props.location.state.collectionTitle,
			collectionDescription 	= this.props.location.state.collectionDescription,
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
				
			</Wrapper>
		);
	}

}

const mapStateToProps = state => {
    return {
    	// restaurantCollections: _.get(state, 'zomatoReducer.restaurantCollections.action.restaurantCollections', []),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchRestaurantCollections: (city) => dispatch(Actions.fetchRestaurantCollections(city)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);