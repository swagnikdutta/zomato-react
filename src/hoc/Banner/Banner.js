import React from 'react';

import { Banner, DarkFilter } from './Style';

const banner = (props) => {

	let bannerImageUrl = props.bannerImageUrl,
		bannerOpacity = props.bannerOpacity;

	return(
		<Banner bannerImageUrl={bannerImageUrl} >
			<DarkFilter bannerOpacity={bannerOpacity} />
			{props.children}
		</Banner>
	);
}

export default banner;