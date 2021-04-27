import { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { RecipeContext } from '../context/RecipeContext';
import Button from './Button';

const StyledSearch = styled.form`
	max-width: 60rem;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	@media (min-width: 37.5em) {
		grid-template-columns: 1fr auto;
		gap: 2rem;
	}
	input {
		grid-column: 1 / -1;
		background-color: #645e8a;
		border: none;
		border-radius: 0.5rem;
		color: #fff;
		font-family: inherit;
		font-size: 1.6rem;
		padding: 1rem 2rem;
		@media (min-width: 37.5em) {
			grid-column: 1 / -2;
		}
		::placeholder {
			color: #fff;
		}
		&:focus {
			outline: none;
		}
	}
	button {
		grid-column: 1 / -1;
		@media (min-width: 37.5em) {
			grid-column: 2;
		}
	}
`;

function Search() {
	const [query, setQuery] = useState('');
	const [prevQuery, setPrevQuery] = useState(query);

	const { isLoading, searchRecipes } = useContext(RecipeContext);

	const disableButton = () => query.trim().length < 3 || isLoading;

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		// Si ya está buscando algo o hay menos de 3 carácteres o es lo mismo que busco antes no hace nada
		if (query.trim().length < 3 || isLoading || query === prevQuery) return;
		searchRecipes(query);
		setPrevQuery(query);
		setQuery('');
	};

	return (
		<StyledSearch onSubmit={handleSearch} autoComplete="off">
			<input
				type="text"
				name="recipe"
				aria-label="Type a dish for search recipes"
				placeholder="Enter a recipe"
				value={query}
				onChange={({ target }) => setQuery(target.value)}
			/>
			<Button type="submit" disabled={disableButton()}>
				Search
			</Button>
		</StyledSearch>
	);
}

export default Search;
