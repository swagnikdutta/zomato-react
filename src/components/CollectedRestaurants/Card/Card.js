import React from 'react';
import { Link } from 'react-router-dom';

import { CardWrapper, CardImage, CardDetails, Name, Cuisine, Address, Rating } from './Style';

const card = (props) => {

	let navigateObj = {
		pathname: `/${props.city}/restaurant/${props.restaurantId}`,
		state: {}
	}

	return (
		<CardWrapper>
			<Link to={navigateObj} style={{ textDecoration: 'none' }}>
				<CardImage imageLink={props.cardImageUrl}>
					<Rating ratingColor={props.ratingColor}>{props.aggregateRating}</Rating>
				</CardImage>
				<CardDetails>
					<Name>{props.restaurantName}</Name>
					<Address>{props.restaurantAddress.toUpperCase()}</Address>
					<Cuisine>{props.cuisines}</Cuisine>
				</CardDetails>
			</Link>
		</CardWrapper>
	);
}

export default card;