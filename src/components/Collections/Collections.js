import React, { Component } from 'react';
import Card from './Card/Card';
import { Wrapper, Heading, Subheading } from './Style.js';

import _ from 'lodash';

const collections = (props) => {

	let restaurantCollections = props.restaurantCollections.map((elem, idx) => {
		let title 			= _.get(elem, 'collection.title'),
			image_url 		= _.get(elem, 'collection.image_url'),
			description 	= _.get(elem, 'collection.description'),
			collectionId 	= _.get(elem, 'collection.collection_id');
		
		return <Card key={idx} collectionId={collectionId} description={description} image_url={image_url} title={title} city={props.city}/>
	});

	return (
		<Wrapper>
			<div>
				<Heading>Collections</Heading>
				<Subheading>Explore curated lists of top restaurants, cafes, pubs, and bars in {props.city}, based on trends</Subheading>	
			</div>
			{restaurantCollections}
		</Wrapper>
	);
};

export default collections;