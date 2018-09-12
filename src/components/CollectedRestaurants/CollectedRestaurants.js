import React from 'react';
import _ from 'lodash';

import Card from './Card/Card';
import { Wrapper, ListWrapper } from './Style.js';

const collectedRestaurants = (props) => {
	
	let collectedRestaurants = props.restaurants.map((elem, idx) => {
		let imageUrl 		= _.get(elem, 'restaurant.featured_image'),
			cuisines		= _.get(elem, 'restaurant.cuisines'),
			ratingColor 	= _.get(elem, 'restaurant.user_rating.rating_color'),
			aggregateRating = _.get(elem, 'restaurant.user_rating.aggregate_rating'),
			locationSummary	= _.get(elem, 'restaurant.location.locality_verbose'),
			restaurantName	= _.get(elem, 'restaurant.name'),
			restaurantId	= _.get(elem, 'restaurant.id');

		return <Card key={idx} 
					cardImageUrl={imageUrl} 
					cuisines={cuisines} 
					ratingColor={ratingColor} 
					aggregateRating={aggregateRating}
					restaurantName={restaurantName} 
					restaurantId={restaurantId}
					restaurantAddress={locationSummary} />
	});

	return(
		<Wrapper>
			<ListWrapper>
				{collectedRestaurants}
			</ListWrapper>
			
			<div>
				Here we will show all the other available collections
			</div>
		</Wrapper>
	);
}

export default collectedRestaurants;