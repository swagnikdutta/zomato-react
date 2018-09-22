import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 4% 5%;
	overflow: hidden;
`;

export const BannerWrapper = styled.div`
	box-shadow: 2px 2px 30px #C8C8C8;
	border-right: 1px solid #C8C8C8;
	border-bottom: 1px solid #C8C8C8;
	border-radius: 4px;
	margin-bottom: 2rem;
`;

export const BannerDetails = styled.div`
	color: #515151;
	padding: 1rem;
	background-color: #fff;
	border-left: 1px solid #fff;
	border-radius: 0 0 4px 4px;
	position: relative;
`;

export const Title = styled.p`
	font-size: 1.8rem;
	margin: 0;
	font-weight: bold;
`;

export const Description = styled.p`
	color: #9B9B9B;
	font-size: 0.9rem;
	font-family: 'Muli', sans-serif;
	margin: 8px 0;
`;

export const Rating = styled.div`
	font-size: 2rem;
	padding: 0.3rem;
	font-weight: bold;
	color: #fff;
	border-radius: 4px;
	text-align: center;
	background-color: ${props => `#${props.ratingColor}`};
`;

