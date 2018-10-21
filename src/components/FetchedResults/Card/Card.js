import React from 'react';
import { Link } from 'react-router-dom';

import { CardWrapper, CardTop, CardBottom, Rating, ImageWrapper, Image, BasicDetail, Name, ShortAddress, LongAddress, InfoKeys, InfoValues, Button } from './Style';

const card = (props) => {

	let navigateObj = {
		pathname: `/${props.city}/restaurant/${props.restaurant_id}`,
	}

	return (
		<CardWrapper>
			<CardTop>
				<ImageWrapper>
					<Image thumb_url={props.thumb_image_url} />
				</ImageWrapper>
				<BasicDetail>
					<Name>{props.name}</Name>
					<ShortAddress>{props.address_short}</ShortAddress>
					<LongAddress>{props.address_long}</LongAddress>
				</BasicDetail>
				<Rating ratingColor={props.rating_color}>{props.aggregate_rating}</Rating>
			</CardTop>
			<CardBottom>
				<InfoKeys>
					<p>CUISINE</p>
					<p>COST FOR TWO</p>
				</InfoKeys>
				<InfoValues>
					<p>{props.cuisines}</p>
					<p>{props.average_cost_for_two}</p>
				</InfoValues>
				<Link to={navigateObj}>
					<Button>VISIT RESTAURANT</Button>
				</Link>
			</CardBottom>
		</CardWrapper>
	);
}

export default card;