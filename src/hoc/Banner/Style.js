import styled from 'styled-components';

import defaultImage from '../../assets/images/home-banner-1.jpg';

export const Banner = styled.div`
	height: 400px;
	background: url( ${props => props.bannerImageUrl ? props.bannerImageUrl : defaultImage} );
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DarkFilter = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0, ${props => props.bannerOpacity ? props.bannerOpacity : 0} );
	z-index: 10;
`;