import React from 'react';
import _ from 'lodash';

// components
import { Wrapper } from './Style.js';
import Card from './Card/Card';

// config
import { reviews as reviewsConfig } from '../../../config/RestaurantConfig';

const getReviewCardComponent = (reviewObject, idx) => {

	let temp = {};
	
	Object.keys(reviewsConfig).forEach((elem, idx) => {
		temp[elem] = _.get(reviewObject, reviewsConfig[elem].path, '');
	});

	return <Card key={idx}
				rating={temp.rating} 
				review_text={temp.review_text} 
				rating_color={temp.rating_color} 
				rating_text={temp.rating_text} 
				name={temp.name} 
				profile_image={temp.profile_image} />
}

const reviews = (props) => {

	let reviews = _.get(props.restaurantReviews, 'user_reviews', []),
		reviewCards = reviews.map((elem, idx) => getReviewCardComponent(elem.review, idx));

	return (
		<Wrapper>
			{reviewCards}
		</Wrapper>
	);
};

export default reviews;
