import styled from 'styled-components';
import defaultImage from '../../../assets/images/image-not-found.svg';

export const CardWrapper = styled.div`
	&{
		width: 60%;
		margin-bottom: 3.5%;
		padding: 10px;
		border-radius: 4px;
		border-right: 1px solid lightgrey;
		border-bottom: 1px solid lightgrey;
		box-shadow: 2px 2px 30px #D3D3D3;
		transition: box-shadow 300ms;
	}
	&:hover{
		box-shadow: 1px 1px 1px #BBBBBB;
		transition: box-shadow 300ms;
	}
`;

export const CardTop = styled.div`
	height: 120px;
	overflow: hidden;
	padding-bottom: 10px;
	border-bottom: 1px solid lightgrey;
`;

export const CardBottom = styled.div`
	overflow: hidden;
`;

export const ImageWrapper = styled.div`
	height: 100%;
	width: 23%;
	float: left;
	margin-right: 2%;
`;

export const Image = styled.div`
	height: 100%;
	width: 100%;
	background: url( ${props => props.thumb_url ? props.thumb_url : defaultImage} );
	background-size: cover;
	border-radius: 4px;
`;

export const BasicDetail = styled.div`
	height: 100%;
	width: 75%;
	float: left;
`;

export const Name = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	color: #cb202d;
	margin-bottom: 5px;
`;

export const ShortAddress = styled.div`
	font-size: 0.9rem;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const LongAddress = styled.div`
	font-size: 0.9rem;
	color: grey;
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
	width: 100%;
	border: none;
	margin: 10px 0 5px 0;
	padding: 10px;
	font-size: 0.8rem;
	font-family: 'Muli', serif;
	font-weight: bold;
	border-radius: 4px;
	background-color: #009688;
	color: white;
	cursor: pointer;
`;
