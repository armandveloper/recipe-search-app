import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Typography from '../components/Typography';
import RecipeMeta from '../components/RecipeMeta';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';

const { Title } = Typography;

const StyledRecipePage = styled.div`
	padding-top: 3.2rem;
	.recipe-img {
		background-color: tomato;
		display: block;
		height: 25rem;
		margin-top: 4rem;
		width: 100%;
	}
	@media (min-width: 56.25em) {
		.grid {
			margin-top: 4.8rem;
			display: grid;
			align-items: start;
			grid-template-columns: 1fr 21.6rem;
		}
		.recipe {
			grid-row: 1;
		}
	}
`;

function RecipePage() {
	return (
		<StyledRecipePage>
			<Wrapper>
				<Title variant="h1">Classic Cheesecake Recipe</Title>
				<div className="recipe-img" />
				<div className="grid">
					<RecipeMeta />
					<div className="recipe">
						<Ingredients />
						<Instructions />
					</div>
				</div>
			</Wrapper>
		</StyledRecipePage>
	);
}

export default RecipePage;
