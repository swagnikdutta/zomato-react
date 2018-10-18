import styled from 'styled-components';

export const Wrapper = styled.div`
	border-bottom: 1px solid lightgrey;
	padding-bottom: 10%;
	margin-bottom: 10%;
	
	&:nth-child(3){
		margin-bottom: 0;
		border-bottom: none;
	}
`;

export const Checkbox = styled.input`
	margin-right: 10px;
	margin-left: 0;
`;

export const CheckboxWrapper = styled.div`
	padding: 5px 0;
	font-size: 13px;
	font-family: 'Muli', serif;
`;

export const FilterLabel = styled.div`
	font-family: 'Muli', serif;
	font-size: 15px;
	font-weight: bold;
	margin-bottom: 2.5%;
`;