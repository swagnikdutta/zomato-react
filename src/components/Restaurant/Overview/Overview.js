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

		if(commonConfig[elem].extraData){
			commonConfig[elem].extraData.forEach((ele) => {
				if(ele.insertAt === 'end'){
					infoValue += ele.message ? ele.message: ` ${_.get(restaurantDetails, ele.path, '')}`;
				} else if(ele.insertAt === 'start'){
					infoValue = (ele.message ? ele.message : _.get(restaurantDetails, ele.path, '')) + ` ${infoValue}`;
				}
			});
		}
		
		if(commonConfig[elem].isBoolean){
			infoValue = infoValue ? commonConfig[elem].messageOnTruthyValue : commonConfig[elem].messageOnFalsyValue;
		}

		return <Card key={idx} iconClass={iconClass} infoKey={infoKey} infoValue={infoValue} />
	});
	
	return (
		<Wrapper>
			{infoCards}
		</Wrapper>
	);
};

export default overview;