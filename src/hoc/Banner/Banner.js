import React from 'react';

import classes from './Banner.css';

const banner = (props) => (
	<div className={classes.Banner}>
		<div className={classes.DarkFilter}></div>
		{props.children}
	</div>
);

export default banner;