import styled from 'styled-components';

export const Input = styled.input`
	width: ${props => props.location ? '150px' : '300px'};
	padding: 0.8em;
	font-size: 0.8em;
	margin: 0.25em;
	border: none;
	border-radius: 3px;
	position: relative;
	z-index: 20;
	outline: none;
`;

export const Button = styled.button`
	&{
		padding: 0.8em 1em;
		font-size: 0.8em;
		margin: 0.25em;
		border: none;
		border-radius: 3px;
		position: relative;
		z-index: 20;
		color: white;
		background-color: red;
		outline: none;
		cursor: pointer;	
	}
	&:active{
		background-color: black;
	}
`;