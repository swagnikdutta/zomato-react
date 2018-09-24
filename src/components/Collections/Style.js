import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: ${props => props.padding ? '5% 6%' : '5% 0'};
	overflow: hidden;
`;

export const Heading = styled.div`
	font-family: 'Arimo', sans-serif;
	font-size: 1.5em;
	color: #444444;
`;

export const Subheading = styled.p`
	color: #999999;
	margin-top: 0;
`;