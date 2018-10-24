import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: ${props => props.renderSource === 'Home' ? '5% 6%' : '2% 0'};
	overflow: hidden;
`;

export const Heading = styled.div`
	font-family: 'Arimo', sans-serif;
	font-size: 1.5em;
	color: #444444;

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 1.3em;
	}
`;

export const Subheading = styled.p`
	color: #999999;
	margin-top: 0;

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 0.9em;
	}
`;