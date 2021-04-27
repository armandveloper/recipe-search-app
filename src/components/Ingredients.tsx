import styled from 'styled-components';
import Typography from './Typography';

const { Title, Text } = Typography;

const StyledIngredients = styled.section`
	margin-top: 2rem;
	.list {
		margin-top: 2rem;
	}
	@media (min-width: 56.25em) {
		margin-top: 0;
	}
`;

const Ingredient = styled.li`
	margin: 1rem 0;
	display: grid;
	align-items: start;
	gap: 0.8rem;
	grid-template-columns: 2rem 1fr;
	@media (min-width: 56.25em) {
		gap: 1.6rem;
	}
`;

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

const Checkbox = () => (
	<StyledCheckbox>
		<input type="checkbox" aria-label="Ingredient check" />
		<span className="square">
			<span className="material-icons">check</span>
		</span>
	</StyledCheckbox>
);

function Ingredients() {
	return (
		<StyledIngredients>
			<Title as="h2" variant="h2">
				Ingredients
			</Title>
			<ul className="list">
				<Ingredient>
					<Checkbox />
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facilis, ipsam sunt voluptates modi minima in
						accusantium nemo deleniti ab beatae.
					</Text>
				</Ingredient>
			</ul>
		</StyledIngredients>
	);
}

export default Ingredients;
