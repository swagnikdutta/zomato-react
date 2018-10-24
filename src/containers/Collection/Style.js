import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 4% 5%;
`;

export const BannerWrapper = styled.div`
	box-shadow: 2px 2px 30px #C8C8C8;
	border-right: 1px solid #C8C8C8;
	border-bottom: 1px solid #C8C8C8;
	border-radius: 4px;
	margin-bottom: 3rem;
`;

export const BannerDetails = styled.div`
	color: #515151;
	padding: 1rem;
	background-color: #fff;
	border-left: 1px solid #fff;
	border-radius: 0 0 4px 4px;

	@media (min-width: 320px) and (max-width: 480px) {
    	padding: 0.5rem;
	}
`;

export const Title = styled.p`
	font-size: 1.8rem;
	margin: 0;
	font-weight: bold;

	@media (min-width: 320px) and (max-width: 480px) {
    	font-size: 1.2rem;
	}
`;

export const Description = styled.p`
	font-size: 0.9rem;
	font-family: 'Muli', sans-serif;
	margin: 8px 0;

	@media (min-width: 320px) and (max-width: 480px) {
    	font-size: 0.8rem;
	}
`;