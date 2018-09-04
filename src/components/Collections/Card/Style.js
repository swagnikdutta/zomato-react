import styled from 'styled-components';

export const CardWrapper = styled.div`
	&{
		height: 120px;
		width: 31.66%;
		float: left;
		margin-right: 2.5%;
		margin-bottom: 2.5%;
		box-shadow: 2px 2px 10px #E3E3E3;
		position: relative;
		box-sizing: border-box;
		cursor: pointer;
		transition: box-shadow 500ms;
		border-radius: 4px;
	}
	&:nth-child(3n+1){
		margin-right: 0;
	}
	&:hover{
		box-shadow: 1px 1px 1px #E3E3E3;
		transition: box-shadow 500ms;
	}
`;

export const CardImage = styled.div`
	height: 100%;
	width: 35%;
	position: absolute;
	left: 0;
	box-sizing: border-box;
	background: url(${props => props.imageLink});
	background-size: cover;
	border-radius: 4px 0 0 4px;
`;

export const CardDetails = styled.div`
	height: 100%;
	width: 65%;
	position: absolute;
	right: 0;
	padding: 5px;
	box-sizing: border-box;
`;
