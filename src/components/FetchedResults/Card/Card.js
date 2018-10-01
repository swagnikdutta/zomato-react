import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CardWrapper, CardTop, CardBottom, ImageWrapper, Image, BasicDetail } from './Style';

const card = (props) => {

	let navigateObj = {
		// pathname: `/${props.city}/collection/${props.collectionId}`,
		// state: {
		// 	bannerImageUrl: props.cardImageUrl,
		// 	collectionTitle: props.title, 
		// 	collectionDescription: props.description,
		// 	restaurantCollections: props.restaurantCollections
		// }
	}

	return (
		<CardWrapper>
			<Link to={navigateObj}>
				<CardTop>
					<ImageWrapper>
						<Image />
					</ImageWrapper>
					<BasicDetail>
						ta
					</BasicDetail>
				</CardTop>
				<CardBottom>
					
				</CardBottom>
			</Link>
		</CardWrapper>
	);
}

export default card;