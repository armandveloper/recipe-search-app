import { useEffect, useState } from 'react';
import {
	InstructionsResponse,
	Step,
} from '../interfaces/recipe-response.interface';

const useInstructions = (
	id: number
): [Step[], boolean, string | null, () => void] => {
	const [instructions, setInstructions] = useState<Step[]>([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const baseURL = 'https://api.spoonacular.com';
	const apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		const getInstructions = async () => {
			const url = `${baseURL}/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;
			try {
				const resp = await fetch(url);

				if (resp.status === 402) {
					throw new Error(
						'Sorry, the application does not allow any more queries. Please try again tomorrow'
					);
				}
				if (resp.status === 404) {
					throw new Error(
						"Something went wrong. It seems this recipe hasn't any instructions"
					);
				}
				const data: InstructionsResponse[] = await resp.json();
				if (!data[0]) {
					throw new Error(
						'We did not find the instructions for this recipe'
					);
				}
				setInstructions(data[0].steps);
				setError(null);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		if (window.isNaN(id)) return;

		getInstructions();
	}, [id, apiKey]);

	const unsetError = () => setError(null);

	return [instructions, isLoading, error, unsetError];
};

export default useInstructions;
