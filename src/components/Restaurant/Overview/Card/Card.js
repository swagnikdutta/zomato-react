import React from 'react';

import classes from './Style.css';

import { Wrapper, IconWrapper, Detail } from './Style';

const card = (props) => {
	return (
		<Wrapper>
			<IconWrapper>
				<i className={`${props.iconClass} ` + classes[`icon_${props.infoKey}`] }></i>
			</IconWrapper>
			<Detail>
				{props.infoValue}
			</Detail>
		</Wrapper>
	);
};

export default card;