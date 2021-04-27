import styled from 'styled-components';

interface ButtonProps {
	full?: boolean;
}

const Button = styled.button<ButtonProps>`
	background-color: #007370;
	border: none;
	border-radius: 0.3rem;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: inherit;
	font-size: 1.6rem;
	text-align: center;
	padding: 0.6rem 1.5rem;
	width: ${({ full }) => (full ? '100%' : null)};
	transition: background-color 0.3s ease;
	&:hover:not(:disabled) {
		background-color: #058682;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export default Button;
