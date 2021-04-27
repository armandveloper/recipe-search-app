import styled from 'styled-components';
import Typography from './Typography';
import Checkbox from './Checkbox';

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
