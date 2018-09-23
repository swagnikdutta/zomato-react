import React from 'react';
import _ from 'lodash';

// components
import Card from './Card/Card';
import { Wrapper } from './Style.js';

// config
import { common as commonConfig } from '../../../config/RestaurantConfig';

const overview = (props) => {

	const restaurantDetails = props.restaurantDetails;
	
	const infoCards = Object.keys(commonConfig).map((elem, idx) => {
		let iconClass = commonConfig[elem].fa_icon,
			infoKey = elem,
			infoValue = _.get(restaurantDetails, commonConfig[elem].path, '');

		return <Card key={idx} iconClass={iconClass} infoKey={infoKey} infoValue={infoValue} />
	});
	
	return (
		<Wrapper>
			{infoCards}
		</Wrapper>
	);
};

export default overview;