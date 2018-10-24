import styled from 'styled-components';
import defaultBackground from '../../../assets/images/image-not-found.svg';

export const CardWrapper = styled.div`
	&{
		height: 255px;
		width: 32%;
		float: left;
		margin-right: 2%;
		margin-bottom: 2%;
		border-radius: 4px;
		cursor: pointer;
	}
	&:nth-child(3n){
		margin-right: 0;
	}

	@media (min-width: 320px) and (max-width: 480px) {
    	width: 100%;
    	margin-bottom: 5%;
	}
`;

export const CardImage = styled.div`
	background: url( ${props => props.imageLink ? props.imageLink : defaultBackground} );
	background-size: cover;
	height: 60%;
	border-radius: 4px 4px 0 0;
`;

export const Rating = styled.div`
	color: white;
	float: right;
	background-color: ${props => `#${props.ratingColor}` };
	border-radius: 0 4px 0 4px;
	font-size: 16px;
	font-weight: bold;
	padding: 4px 10px;
`;

export const CardDetails = styled.div`
	border-radius: 0 0 4px 4px;
	background-color: #fff;
	border-right: 1px solid #C8C8C8;
	border-bottom: 1px solid #C8C8C8;
	border-left: 1px solid #C8C8C8;
	height: 40%;
	padding: 2.5%;
	overflow: hidden;
`;

export const Name = styled.p`
	margin: 0 0 4px 0;
	font-weight: bold;
	color: #505050;
`;

export const Address = styled.p`
	margin: 0 0 4px 0;
	font-size: 13px;
	color: grey;
	font-family: 'Muli', sans-serif;
`;

export const Cuisine = styled.p`
	margin: 0;
	font-size: 13px;
	color: grey;
	font-family: 'Muli', sans-serif;
`;

