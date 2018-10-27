import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 4%;
	overflow: hidden;
`;

export const FiltersWrapper = styled.div`
	width: 20%;
	margin-right: 3%;
	float: left;
`;

export const ResultsWrapper = styled.div`
	width: 77%;
	float: left;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 100%;
	}
`;