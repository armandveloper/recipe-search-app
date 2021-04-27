import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { hideAlert, showAlert } from '../animations';

declare type Severity = 'success' | 'error';

interface AlertProps {
	severity: Severity;
	show: boolean;
	children: ReactNode;
	onClose(): void;
}

const colors = {
	success: '#27ae70',
	error: '#eb5757',
};

const StyledAlert = styled.div<{ severity: Severity; show: boolean }>`
	width: 100%;
	position: fixed;
	top: 2rem;
	left: 0;
	z-index: 100;
	.inner {
		background-color: ${({ severity }) => colors[severity]};
		color: #000;
		font-size: 1.8rem;
		line-height: 1.2;
		max-width: 50rem;
		margin: 0 2rem;
		padding: 1rem 2rem;
		transform-origin: left top;
		${({ show }) => (show ? showAlert : hideAlert)};
		@media (min-width: 37.5em) {
			margin: 0 2rem 0 auto;
		}
	}
`;

function Alert({ severity, show, children, onClose }: AlertProps) {
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	useEffect(() => {
		if (show) {
			const timeout = window.setTimeout(() => {
				onClose();
			}, 3000);
			return () => window.clearTimeout(timeout);
		}
	}, [onClose, show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<StyledAlert
			onAnimationEnd={handleAnimationEnd}
			show={show}
			severity={severity}
		>
			<div className="inner">{children}</div>
		</StyledAlert>
	);
}

export default Alert;
