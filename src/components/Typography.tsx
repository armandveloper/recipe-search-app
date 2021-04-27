import styled from 'styled-components';

declare type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
	variant: TitleLevel;
	gutter?: boolean;
}

interface TextProps {
	gutter?: boolean;
}

const titleSizes = {
	h1: 2.4,
	h2: 2,
	h3: 1.8,
	h4: 1.6,
	h5: 1.4,
	h6: 1.2,
};

const Title = styled.h1<TitleProps>`
	color: #fff;
	font-family: 'Playfair Display', serif;
	font-size: ${({ variant }) => `${titleSizes[variant]}rem`};
	line-height: 1.4;
	font-weight: 700;
	margin: 0;
	@media (min-width: 37.5em) {
		font-size: ${({ variant }) =>
			`${(titleSizes[variant] * 1.25).toFixed(1)}rem`};
	}
	@media (min-width: 56.25em) {
		font-size: ${({ variant }) =>
			`${(titleSizes[variant] * 1.5).toFixed(1)}rem`};
	}
	@media (min-width: 75em) {
		font-size: ${({ variant }) =>
			`${(titleSizes[variant] * 2).toFixed(1)}rem`};
	}
`;

const Text = styled.p<TextProps>`
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.5rem;
	margin: ${({ gutter }) => (gutter ? '1rem 0' : '0')};
	@media (min-width: 56.25em) {
		font-size: 1.6rem;
	}
`;

const Typography = {
	Title,
	Text,
};

export default Typography;
