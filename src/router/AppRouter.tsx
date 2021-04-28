import { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Loader from '../components/Loader';
const HomePage = lazy(() => import('../pages/HomePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));

function AppRouter() {
	return (
		<Router basename="recipe-search-app">
			<Suspense fallback={<Loader center={true} />}>
				<Switch>
					<Route path="/" exact={true}>
						<HomePage />
					</Route>
					<Route path="/recipes/:id" exact={true}>
						<RecipePage />
					</Route>
					<Redirect to="/" />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default AppRouter;
