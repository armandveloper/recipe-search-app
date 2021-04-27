import { css, keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const slideInDown = keyframes`
  from {
    transform: translateY(-1rem);
  }
  to {
    transform: translateY(0);

  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

export const slideOutUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1rem);
  }
`;

export const showAlert = css`
	animation: ${fadeIn} 0.3s ease-in, ${slideInDown} 0.3s 0.1s ease-in;
`;

export const hideAlert = css`
	animation: ${fadeOut} 0.3s ease-in, ${slideOutUp} 0.3s ease-in;
`;
