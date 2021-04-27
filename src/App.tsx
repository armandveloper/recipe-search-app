import { RecipeProvider } from './context/RecipeContext';
import AppRouter from './router/AppRouter';
import GlobalStyles from './styles/globalStyles';

function App() {
	return (
		<RecipeProvider>
			<GlobalStyles />
			<AppRouter />
		</RecipeProvider>
	);
}

export default App;
