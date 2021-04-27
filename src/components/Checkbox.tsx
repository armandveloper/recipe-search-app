import styled from 'styled-components';

const StyledCheckbox = styled.label`
	user-select: none;
	input {
		display: none;
	}
	.square {
		border: 1px solid #e1e1e1;
		border-radius: 0.4rem;
		cursor: pointer;
		display: block;
		height: 2rem;
		width: 2rem;
		span {
			font-size: 1.8rem;
			opacity: 0;
			transition: opacity 0.3s ease;
		}
	}
	input:checked ~ .square {
		span {
			opacity: 1;
		}
	}
`;

function Checkbox() {
	return (
		<StyledCheckbox>
			<input type="checkbox" aria-label="Ingredient check" />
			<span className="square">
				<span className="material-icons">check</span>
			</span>
		</StyledCheckbox>
	);
}

export default Checkbox;
