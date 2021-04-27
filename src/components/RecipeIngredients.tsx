import styled from 'styled-components';
import Typography from './Typography';
import Checkbox from './Checkbox';
import { ExtendedIngredient } from '../interfaces/recipe-response.interface';

const { Title, Text } = Typography;

interface RecipeIngredientsProps {
	ingredients: ExtendedIngredient[];
}

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

function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
	return (
		<StyledIngredients>
			<Title as="h2" variant="h2">
				Ingredients
			</Title>
			<ul className="list">
				{ingredients.map((ingredient) => (
					<Ingredient key={ingredient.id}>
						<Checkbox />
						<Text>{ingredient.original}</Text>
					</Ingredient>
				))}
			</ul>
		</StyledIngredients>
	);
}

export default RecipeIngredients;
