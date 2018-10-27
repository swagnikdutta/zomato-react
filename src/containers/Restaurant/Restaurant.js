import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';

// Components
import Loader from '../../hoc/Loader/Loader';
import Banner from '../../hoc/Banner/Banner';
import Overview from '../../components/Restaurant/Overview/Overview';
import Reviews from '../../components/Restaurant/Reviews/Reviews';
import { Wrapper, BannerWrapper, BannerDetails, Title, Description, Rating, RatingWrapper, MaxRating, VoteCount } from './Style';

class Restaurant extends Component{

	componentDidMount(){
		let restaurantId = this.props.match.params.restaurantId;
		this.props.fetchRestaurantDetails(restaurantId);
	}

	render(){
		let restaurantDetails 		= this.props.restaurantDetails,
			restaurantReviews		= this.props.restaurantReviews,
			restaurantName 			= _.get(restaurantDetails, 'name', ''),
			restaurantLocation 		= _.get(restaurantDetails, 'location.locality_verbose', ''),
			bannerImageUrl			= _.get(restaurantDetails, 'featured_image', ''),
			cuisines 				= _.get(restaurantDetails, 'cuisines', ''),
			voteCount				= _.get(restaurantDetails, 'user_rating.votes', ''),
			ratingColor 			= _.get(restaurantDetails, 'user_rating.rating_color', ''),
			aggregateRating 		= _.get(restaurantDetails, 'user_rating.aggregate_rating', '');

		return (
			<Wrapper>
				{this.props.loaderVisibility ? <Loader /> : null}
				<BannerWrapper>
					<Banner bannerImageUrl={bannerImageUrl} bannerHeight={'350px'} />
					<BannerDetails>
						<Title>{restaurantName}</Title>
						<Description>
							{restaurantLocation}<br />
							{cuisines}
						</Description>

						<RatingWrapper>
							<Rating ratingColor={ratingColor}>
								{aggregateRating}<MaxRating>/5</MaxRating>
							</Rating>
							<VoteCount>{voteCount} votes</VoteCount>
						</RatingWrapper>
					</BannerDetails>
				</BannerWrapper>
				<Overview restaurantDetails={restaurantDetails} />
				<Reviews restaurantReviews={restaurantReviews} />
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
    return {
    	restaurantDetails: _.get(state, 'zomatoReducer.restaurantDetails', {}),
    	restaurantReviews: _.get(state, 'zomatoReducer.restaurantReviews', {}),
    	loaderVisibility: _.get(state, 'zomatoReducer.loaderVisibility', false)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantDetails: (restaurantId) => dispatch(Actions.fetchRestaurantDetails(restaurantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);