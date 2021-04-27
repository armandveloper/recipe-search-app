import { createContext, ReactNode, useCallback, useState } from 'react';
import { RecipeResponse } from '../interfaces/recipe-response.interface';
import {
	SearchRecipes,
	RecipeResult,
} from '../interfaces/search-recipes.interface';

interface RecipeContextInt {
	recipes: RecipeResult[];
	recipe: RecipeResponse;
	isLoading: boolean;
	error: string | null;
	setError(value: string | null): void;
	searchRecipes(q: string): void;
	getRecipe(id: number): Promise<void>;
}

export const RecipeContext = createContext<RecipeContextInt>(
	{} as RecipeContextInt
);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
	const baseURL = 'https://api.spoonacular.com';
	const apiKey = process.env.REACT_APP_API_KEY;

	const [recipes, setRecipes] = useState<RecipeResult[]>([]);
	const [recipe, setRecipe] = useState<RecipeResponse>(null!);

	const [isLoading, setLoading] = useState(false);

	const [error, setError] = useState<string | null>(null);

	const searchRecipes = async (q: string) => {
		setLoading(true);
		try {
			const resp = await fetch(
				`${baseURL}/recipes/complexSearch?apiKey=${apiKey}&query=${encodeURI(
					q
				)}&number=12`
			);

			// Si ya se excedió el límite diario marca error
			if (resp.status === 402) {
				throw new Error(
					'Sorry, the application does not allow any more queries. Please try again tomorrow'
				);
			}
			const data: SearchRecipes = await resp.json();
			if (data.results.length === 0)
				throw new Error('No results found for ' + q);
			setRecipes(data.results);
			setError(null);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const getRecipe = useCallback(
		async (id: number) => {
			setLoading(true);

			try {
				const resp = await fetch(
					`${baseURL}/recipes/${id}/information?apiKey=${apiKey}`
				);

				// Si ya se excedió el límite diario marca error
				if (resp.status === 402) {
					throw new Error(
						'Sorry, the application does not allow any more queries. Please try again tomorrow'
					);
				}
				if (resp.status === 404) {
					throw new Error(
						'The recipe was not found. Try with a valid recipe id'
					);
				}
				const data = await resp.json();
				setRecipe(data);
				setError(null);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		},
		[apiKey]
	);

	return (
		<RecipeContext.Provider
			value={{
				recipes,
				recipe,
				isLoading,
				error,
				setError,
				searchRecipes,
				getRecipe,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
};
