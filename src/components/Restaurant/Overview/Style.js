import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 30%;
	float: left;
	padding: 20px;
	margin-right: 2%;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		padding: 0;
	}
`;
