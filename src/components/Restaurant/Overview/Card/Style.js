import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 90px;

	@media (min-width: 320px) and (max-width: 480px) {
		height: 60px;
	}
`;

export const IconWrapper = styled.div`
	width: 30%;
	height: 100%;
	float: left;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 25%;
	}
`;

export const Detail = styled.div`
	width: 70%;
	height: 100%;
	float: left;
	color: grey;
	font-size: 14px;
	font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 75%;
		font-size: 12px;
	}
`;