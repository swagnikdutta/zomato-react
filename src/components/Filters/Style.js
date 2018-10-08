import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 10px;
`;

export const FilterBlock = styled.div`
	border-bottom: 1px solid lightgrey;
	padding-bottom: 10%;
	margin-bottom: 10%;
	
	&:nth-child(3){
		margin-bottom: 0;
		border-bottom: none;
	}
	& > .checkbox-wrapper{
		// border: 1px solid lightgrey;
	}
`;

export const FilterBy = styled.div`
	font-size: 13px;
	font-weight: bold;
	font-family: 'Muli', serif;
	margin-bottom: 3%;
	color: #546e7a;
`;