import styled from 'styled-components';
import defaultImage from '../../assets/images/home-banner-1.jpg';

const defaultBannerHeight = '400px';

export const Banner = styled.div`
	height: ${props => props.bannerHeight ? props.bannerHeight : defaultBannerHeight};
	background: url( ${props => props.bannerImageUrl ? props.bannerImageUrl : defaultImage} );
	background-size: cover;
	background-position: center;
	position: relative;
	border-radius: 4px 4px 0 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 320px) and (max-width: 480px) {
    	height: ${props => props.renderSource && props.renderSource === 'Home' ? defaultBannerHeight : '250px'};
    	background-position: bottom;
	}
`;

export const DarkFilter = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0, ${props => props.bannerOpacity ? props.bannerOpacity : 0} );
	z-index: 10;
`;