import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/routing/PrivateRoute';
import Home from './components/pages/Home/index.js';
import Landing from './components/pages/Landing/index.js';
import Alerts from './components/Alerts';
import Footer from './components/Footer';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.scss';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<Fragment>
						<Alerts />

						<main className='container'>
							<Switch>
								<PrivateRoute exact path='/' component={Home} />
								<Route
									exact
									path='/landing'
									component={Landing}
								/>
							</Switch>
						</main>
						<Footer />
					</Fragment>
				</Router>
			</AlertState>
		</AuthState>
	);
};

export default App;
