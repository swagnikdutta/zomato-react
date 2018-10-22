import React, { Component } from 'react';
import { LoaderWrapper } from './Style';

class Loader extends Component {

	render() {
		return (
			<LoaderWrapper>
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 44 44" stroke="red">
				    <g fill="none" fillRule="evenodd" strokeWidth="2">
				        <circle cx="22" cy="22" r="19.4096">
				            <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
				            <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
				        </circle>
				        <circle cx="22" cy="22" r="11.2285">
				            <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
				            <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
				        </circle>
				    </g>
				</svg>
			</LoaderWrapper>
		);
	}
}

export default Loader;