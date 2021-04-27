import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RecipePage from '../pages/RecipePage';

function AppRouter() {
	return (
		<Router basename="recipe-search-app">
			<div>
				<Switch>
					<Route path="/" exact={true}>
						<HomePage />
					</Route>
					<Route path="/recipes/:id" exact={true}>
						<RecipePage />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
