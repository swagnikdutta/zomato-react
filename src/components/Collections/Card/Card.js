import React, { Component } from 'react';
import {CardWrapper, CardImage, CardDetails, Title, Description} from './Style';

const card = (props) => {

	let onCollectionCardClicked = () => {
		window.location.href=`/${props.city}/collection/${props.collectionId}`;
	};

	return (
		<CardWrapper onClick={onCollectionCardClicked}>
			<CardImage imageLink={props.image_url} />
			<CardDetails>
				<Title>{props.title}</Title>
				<Description>{props.description}</Description>
			</CardDetails>
		</CardWrapper>
	);
}

export default card;