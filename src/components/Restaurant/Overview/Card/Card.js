import React, { Component } from 'react';

import { Wrapper, IconWrapper, Detail } from './Style';

const card = (props) => {
	console.log(props)
	return (
		<Wrapper>
			<IconWrapper>
				<i className={`fas icon_${props.infoKey} ${props.iconClass}`}></i>
			</IconWrapper>
			<Detail>
				{props.infoValue}
			</Detail>
		</Wrapper>
	);
};

export default card;