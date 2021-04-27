import styled from 'styled-components';
import { spin } from '../animations';

interface LoaderProps {
	center?: boolean;
}

const Loader = styled.div<LoaderProps>`
	border-top: 0.2rem solid #fff;
	border-radius: 50%;
	height: 4rem;
	margin: ${({ center }) => (center ? '0 auto' : null)};
	width: 4rem;
	animation: ${spin} 0.8s linear infinite;
`;

export default Loader;
