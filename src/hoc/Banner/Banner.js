import React from 'react';

import { Banner, DarkFilter } from './Style';

const banner = (props) => {

	let bannerImageUrl = props.bannerImageUrl,
		bannerOpacity = props.bannerOpacity,
		bannerHeight = props.bannerHeight;

	return(
		<Banner bannerImageUrl={bannerImageUrl} bannerHeight={bannerHeight}>
			<DarkFilter bannerOpacity={bannerOpacity} />
			{props.children}
		</Banner>
	);
}

export default banner;