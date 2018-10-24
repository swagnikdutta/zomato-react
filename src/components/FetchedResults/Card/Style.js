import styled from 'styled-components';
import defaultImage from '../../../assets/images/image-not-found.svg';

export const CardWrapper = styled.div`
	&{
		width: 65%;
		margin-bottom: 3.5%;
		padding: 10px;
		border-radius: 8px;
		border: 1px solid lightgrey;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		margin-bottom: 5%;
	}
`;

export const CardTop = styled.div`
	height: 120px;
	overflow: hidden;
	padding-bottom: 10px;
	border-bottom: 1px solid lightgrey;

	@media (min-width: 320px) and (max-width: 480px) {
		height: auto;
	}
`;

export const CardBottom = styled.div`
	overflow: hidden;
`;

export const ImageWrapper = styled.div`
	height: 100%;
	width: 20%;
	float: left;
	margin-right: 2%;

	@media (min-width: 320px) and (max-width: 480px) {
		display: none;
	}
`;

export const Image = styled.div`
	height: 100%;
	width: 100%;
	background: url( ${props => props.thumb_url ? props.thumb_url : defaultImage} );
	background-size: cover;
	border-radius: 8px;
`;

export const BasicDetail = styled.div`
	height: 100%;
	width: 70%;
	float: left;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 88%;
	}
`;

export const Rating = styled.div`
	width: 8%;
	float: left;
	padding: 5px;
	text-align: center;
	background-color: ${props => `#${props.ratingColor}`};
	color: #fff;
	border-radius: 4px;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 12%;
		padding: 5px 0;
		font-size: 0.9rem;
	}
`;

export const Name = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	color: #cb202d;
	margin-bottom: 5px;

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export const ShortAddress = styled.div`
	font-size: 0.9rem;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const LongAddress = styled.div`
	font-size: 0.9rem;
	color: grey;

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

export const InfoKeys = styled.div`
	float: left;
	width: 23%;
	margin-right: 2%;
	& > p {
		font-size: 0.8rem;
		color: grey;
	}
`;

export const InfoValues = styled.div`
	float: left;
	width: 75%;
	& > p {
		font-size: 0.8rem;
		color: grey;
	}
`;

export const Button = styled.button`
	&{
		width: 100%;
		border: 1px solid #e57373;
		margin: 10px 0 0 0;
		padding: 10px;
		font-size: 0.8rem;
		font-family: 'Muli', serif;
		border-radius: 8px;
		color: #e57373;
		cursor: pointer;
		transition: background-color 300ms, color 300ms;
	}
	&:hover{
		background-color: #e57373;
		color: #fff;
		transition: background-color 300ms, color 300ms;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		background-color: #e57373;
		color: #fff;
		padding: 8px;
		font-size: 0.7rem;
	}
`;
