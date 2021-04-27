import { useContext } from 'react';
import styled from 'styled-components';
import { RecipeContext } from '../context/RecipeContext';
import Wrapper from '../components/Wrapper';
import Typography from '../components/Typography';
import Search from '../components/Search';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const { Title } = Typography;

const Grid = styled.div`
	margin: 4rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 4rem 1rem;
	@media (min-width: 56.25em) {
		margin: 6rem 0;
		gap: 4rem 2rem;
	}
`;

const Box = styled.div`
	margin: 4rem 0;
	@media (min-width: 56.25em) {
		margin: 6rem 0;
	}
`;

function HomePage() {
	const { recipes, isLoading, error } = useContext(RecipeContext);

	return (
		<Wrapper>
			<Alert show={error !== null} severity="error">
				{error}
			</Alert>

			<Title variant="h1" center={true} gutter={true}>
				Search Recipes
			</Title>
			<Search />
			{isLoading ? (
				<Box>
					<Loader center={true} />
				</Box>
			) : error ? null : (
				<Grid>
					{recipes.map((recipe) => (
						<Card key={recipe.id} recipe={recipe} />
					))}
				</Grid>
			)}
		</Wrapper>
	);
}

export default HomePage;
