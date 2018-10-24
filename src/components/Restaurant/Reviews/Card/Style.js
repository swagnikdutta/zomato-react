import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-bottom: 1.5rem;
	overflow: hidden;
`;

export const ImageWrapper = styled.div`
	width: 15%;
	float: left;
	overflow: hidden;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 25%;
		margin-top: 5px;
	}
`;

export const ProfileImage = styled.div`
	background: url(${props => props.imageUrl});
	background-size: contain;
	height: 80px;
	width: 80px;
	border-radius: 50%;

	@media (min-width: 320px) and (max-width: 480px) {
		height: 60px;
		width: 60px;
	}
`;

export const Detail = styled.div`
	width: 85%;
	float: left;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 75%;
	}
`;

export const Name = styled.div`
	font-weight: bold;
	font-size: 16px;
	color: grey;
	padding: 5px 0;
`;

export const Stars = styled.div`
	& > i{
		color: ${props => `#${props.ratingColor}`}
	}
`;

export const Review = styled.div`
	font-family: 'Muli', sans-serif;
	font-size: 14px;
	padding-top: 10px;

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 12px;
	}
`;



