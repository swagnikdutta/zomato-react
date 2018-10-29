import styled from 'styled-components';

export const CardWrapper = styled.div`
	&{
		height: 120px;
		width: 31.66%;
		float: left;
		margin-right: 2.5%;
		margin-bottom: 2.5%;
		box-shadow: ${props => props.renderSource === 'Home' ? '2px 2px 30px #D3D3D3' : 'none'};
		position: relative;
		cursor: pointer;
		transition: box-shadow 300ms;
		border-radius: 4px;
	}
	&:nth-child(3n+1){
		margin-right: 0;
	}
	&:hover{
		box-shadow: ${props => props.renderSource === 'Home' ? '1px 1px 1px #BBBBBB' : 'none'};
		transition: box-shadow 300ms;
	}
	@media (min-width: 320px) and (max-width: 480px) {
    	width: 100%;
	}
`;

export const CardImage = styled.div`
	height: 100%;
	width: 35%;
	position: absolute;
	left: 0;
	background: url(${props => props.imageLink});
	background-size: cover;
	border-radius: 4px 0 0 4px;
`;

export const CardDetails = styled.div`
	height: 100%;
	width: 65%;
	position: absolute;
	right: 0;
	padding: 4%;
	border: ${props => props.renderSource === 'Collection' ? '1px solid #D3D3D3' : 'none'};
	border-radius: ${props => props.renderSource === 'Collection' ? '0 4px 4px 0' : 'none'};
	overflow: hidden;
`;

export const Title = styled.p`
	font-weight: bold;
	color: #505050;
	margin-top: 0;
	margin-bottom: 3%;
`;

export const Description = styled.p`
	margin: 0;
	font-size: 13px;
	color: grey;
	font-family: 'Muli', sans-serif;
`;
