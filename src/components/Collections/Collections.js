import React, { Component } from 'react';
import Card from './Card/Card';
import { Wrapper } from './Style.js';

import _ from 'lodash';

const collections = (props) => {

	let restaurantCollections = props.restaurantCollections.map((elem, idx) => {
		let title 			= _.get(elem, 'collection.title'),
			image_url 		= _.get(elem, 'collection.image_url'),
			description 	= _.get(elem, 'collection.description'),
			collectionId 	= _.get(elem, 'collection.collection_id');
		
		return <Card collectionId={collectionId} description={description} image_url={image_url} title={title} />
	});

	return (
		<Wrapper>
			<h2>Collections</h2>
			{restaurantCollections}
		</Wrapper>
	);
};

export default collections;