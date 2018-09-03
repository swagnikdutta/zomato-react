import React, { Component } from 'react';
import {CardWrapper, CardImage, CardDetails} from './Style';

const card = (props) => {

	return (
		<CardWrapper>
			<CardImage imageLink={props.image_url} />
			<CardDetails>
				{props.title}

			</CardDetails>
		</CardWrapper>
	);
}

export default card;