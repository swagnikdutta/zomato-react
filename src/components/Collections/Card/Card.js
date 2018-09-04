import React, { Component } from 'react';
import {CardWrapper, CardImage, CardDetails, Title, Description} from './Style';

const card = (props) => {

	return (
		<CardWrapper>
			<CardImage imageLink={props.image_url} />
			<CardDetails>
				<Title>{props.title}</Title>
				<Description>{props.description}</Description>
			</CardDetails>
		</CardWrapper>
	);
}

export default card;