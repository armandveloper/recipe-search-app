import { useContext } from 'react';
import styled from 'styled-components';
import { RecipeContext } from '../context/RecipeContext';
import Wrapper from '../components/Wrapper';
import Box from '../components/Box';
import Typography from '../components/Typography';
import Search from '../components/Search';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const { Title } = Typography;

const Grid = styled.div`
	margin: 4rem 0;
	display: grid;
	grid-template-columns: 1fr;
	gap: 4rem 1rem;
	@media (min-width: 37.5em) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 48em) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 56.25em) {
		margin: 6rem 0;
		gap: 4rem 2rem;
		grid-template-columns: repeat(4, 1fr);
	}
`;

function HomePage() {
	const { recipes, isLoading, error, setError } = useContext(RecipeContext);

	return (
		<Wrapper>
			<Alert
				onClose={() => setError(null)}
				show={error !== null}
				severity="error"
			>
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
