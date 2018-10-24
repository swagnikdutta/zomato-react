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

	@media (min-width: 320px) and (max-width: 480px) {
    	width: 90%;
    	margin-left: 5%;
	}
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
	
	@media (min-width: 320px) and (max-width: 480px) {
    	width: 90%;
    	margin-left: 5%;
    	margin-top: .5em;
	}
`;

export const Checkbox = styled.input`
	z-index: 20;
	position: relative;
	margin 1em;
`;

export const Wrapper = styled.div`
	text-align: center;
	color: white;
	z-index: 20;
	position: relative;
	font-size: 0.8em;
	
`;