import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 68%;
	float: left;
	padding: 20px;
	border-left: 1px solid #C8C8C8;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		border: none;
		padding: 0;
	}
`;
