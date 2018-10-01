import React from 'react';
import _ from 'lodash';

// components
import Card from './Card/Card';

// import { Wrapper } from './Style.js';

const fetchedResults = (props) => {

	let restaurantCollections = props.restaurants.map((elem, idx) => {
				
		return <Card key={idx} />
	});

	return(
		<div>
			{restaurantCollections}
		</div>
	);
};

export default fetchedResults;