import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 20px;
	border-radius: 8px;
	border: 1px solid lightgrey;

	@media (min-width: 320px) and (max-width: 480px) {
		display: none;
	}
`;