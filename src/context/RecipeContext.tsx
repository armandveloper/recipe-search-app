import { createContext, ReactNode, useState } from 'react';
import {
	SearchRecipes,
	RecipeResult,
} from '../interfaces/search-recipes.interface';

interface RecipeContextInt {
	recipes: RecipeResult[];
	isLoading: boolean;
	error: string | null;
	searchRecipes(q: string): void;
	setError(value: string | null): void;
}

export const RecipeContext = createContext<RecipeContextInt>(
	{} as RecipeContextInt
);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
	const baseURL = 'https://api.spoonacular.com';
	const apiKey = process.env.REACT_APP_API_KEY;

	const [recipes, setRecipes] = useState<RecipeResult[]>([]);

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
			if (resp.status === 402)
				throw new Error(
					'Sorry, the application does not allow any more queries. Please try again tomorrow'
				);
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

	return (
		<RecipeContext.Provider
			value={{
				recipes,
				isLoading,
				error,
				searchRecipes,
				setError,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
};
