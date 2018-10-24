import React from 'react';

import { Banner, DarkFilter } from './Style';

const banner = (props) => {

	let bannerImageUrl = props.bannerImageUrl,
		bannerOpacity = props.bannerOpacity,
		bannerHeight = props.bannerHeight,
		renderSource = props.renderSource;

	return(
		<Banner bannerImageUrl={bannerImageUrl} bannerHeight={bannerHeight} renderSource={renderSource}>
			<DarkFilter bannerOpacity={bannerOpacity} />
			{props.children}
		</Banner>
	);
}

export default banner;