import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CardWrapper, CardImage, CardDetails, Name, Cuisine, Address } from './Style';

const card = (props) => {
	
	// restaurantId
	// rating yet to be added on card image

	// let navigateObj = {
	// 	pathname: `/${props.city}/collection/${props.collectionId}`,
	// 	state: {
	// 		bannerImageUrl: props.cardImageUrl,
	// 		collectionTitle: props.title, 
	// 		collectionDescription: props.description
	// 	}
	// }

	return (
		<CardWrapper>
			<CardImage imageLink={props.cardImageUrl}>

			</CardImage>
			<CardDetails>
				<Name>{props.restaurantName}</Name>
				<Address>{props.restaurantAddress.toUpperCase()}</Address>
				<Cuisine>{props.cuisines}</Cuisine>
			</CardDetails>
		</CardWrapper>
	);
}

export default card;