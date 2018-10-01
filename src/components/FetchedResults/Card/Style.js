import styled from 'styled-components';

export const CardWrapper = styled.div`
	&{
		border: 1px solid lightgrey;
		width: 60%;
		height: 300px;
		cursor: pointer;
		margin-bottom: 2.5%;
		padding: 10px;
		border-radius: 4px;
		
		// box-shadow: 2px 2px 10px #D3D3D3;
		transition: box-shadow 300ms;
		
	}
	&:hover{
		// box-shadow: 1px 1px 1px #BBBBBB;
		transition: box-shadow 300ms;
	}
`;

export const CardTop = styled.div`
	border: 1px solid lightgrey;
	height: 40%;
	overflow: hidden;
`;

export const CardBottom = styled.div`
	border: 1px solid lightgrey;
	height: 60%;
`;

export const ImageWrapper = styled.div`
	border: 1px solid lightgrey;
	height: 100%;
	width: 23%;
	float: left;
	margin-right: 2%;
`;

export const Image = styled.div`
	border: 1px solid red;
	height: 100%;
	width: 100%;
`;

export const BasicDetail = styled.div`
	border: 1px solid plum;
	height: 100%;
	width: 75%;
	float: left;
`;
