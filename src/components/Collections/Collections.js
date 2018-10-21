import React from 'react';
import _ from 'lodash';

import Card from './Card/Card';
import { Wrapper, Heading, Subheading } from './Style.js';

const collections = (props) => {

	let restaurantCollections = props.restaurantCollections.map((elem, idx) => {
		let title 			= _.get(elem, 'collection.title'),
			imageUrl 		= _.get(elem, 'collection.image_url'),
			description 	= _.get(elem, 'collection.description'),
			collectionId 	= _.get(elem, 'collection.collection_id');
		
		return <Card key={idx} 
					collectionId={collectionId} 
					description={description} 
					cardImageUrl={imageUrl} 
					title={title} 
					city={props.city}
					restaurantCollections={props.restaurantCollections}
					renderSource={props.renderSource} />
	});

	return (
		<Wrapper renderSource={props.renderSource}>
			<div>
				<Heading>Collections</Heading>
				<Subheading>Explore curated lists of top restaurants, cafes, pubs, and bars in {props.city}, based on trends</Subheading>	
			</div>
			{restaurantCollections}
		</Wrapper>
	);
};

export default collections;