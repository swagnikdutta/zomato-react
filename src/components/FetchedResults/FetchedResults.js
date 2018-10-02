import React from 'react';
import _ from 'lodash';

// components
import Card from './Card/Card';

// config
import { restaurant as restaurantConfig } from '../../config/SearchResultsConfig';

const getRestaurantCardComponent = (restaurantObj, city, idx) => {
	let temp = {};
	
	Object.keys(restaurantConfig).forEach((elem, idx) => {
		let value = _.get(restaurantObj, restaurantConfig[elem].path, '');

		if(restaurantConfig[elem].extraData){
			restaurantConfig[elem].extraData.forEach((ele) => {
				if(ele.insertAt === 'end'){
					value += ele.message ? ele.message: ` ${_.get(restaurantObj, ele.path, '')}`;
				} else if(ele.insertAt === 'start'){
					value = (ele.message ? ele.message : _.get(restaurantObj, ele.path, '')) + ` ${value}`;
				}
			});
		}
		temp[elem] = value;
	});

	return <Card key={idx}
				city={city}
				name={temp.name}
				thumb_image_url={temp.thumb}
				restaurant_id={temp.restaurant_id}
				aggregate_rating={temp.aggregate_rating}
				rating_color={temp.rating_color}
				votes={temp.votes}
				address_short={temp.address_short}
				address_long={temp.address_long}
				cuisines={temp.cuisines}
				average_cost_for_two={temp.average_cost_for_two} />
}

const fetchedResults = (props) => {
	let city = props.city;
	let restaurantsList = props.restaurants.map((elem, idx) => getRestaurantCardComponent(elem.restaurant, city, idx));

	return(
		<div>
			{restaurantsList}
		</div>
	);
};

export default fetchedResults;