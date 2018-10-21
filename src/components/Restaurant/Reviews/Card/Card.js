import React from 'react';

import { Wrapper, ImageWrapper, ProfileImage, Detail, Name, Stars, Review } from './Style';

const card = (props) => {

	let starIcons = [];
	for(let i = 0; i < props.rating; i++){
		starIcons.push(<i className="fas fa-star" key={i}></i>);
	}

	return (
		<Wrapper>
			<ImageWrapper>
				<ProfileImage imageUrl={props.profile_image}/>
			</ImageWrapper>
			<Detail>
				<Name>{props.name}</Name>
				<Stars ratingColor={props.rating_color}>{starIcons}</Stars>
				<Review>
					{props.review_text}
				</Review>
			</Detail>
		</Wrapper>
	);
};

export default card;