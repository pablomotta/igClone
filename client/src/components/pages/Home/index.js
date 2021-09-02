import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

const Home = () => {
	const history = useHistory();
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { user, isAuthenticated, error, clearErrors, logout, loading } =
		authContext;
	const { setAlert } = alertContext;
	useEffect(() => {
		if (!isAuthenticated) {
			logout();
			history.push('/landing');
		}
		if (user === null) {
			logout();
			history.push('/landing');
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		if (isAuthenticated) {
			// setTimeout(() => {
			// 	setAlert(`Welcome, ${user && user.name}!`, 'primary', 3000);
			// }, 1500);
			setAlert(`Welcome, ${user && user.name}!`, 'primary', 3000);
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, history]);

	const onLogout = () => {
		history.push('/landing');
		logout();
		setAlert('You have been logged out!', 'primary', 3000);
	};

	return (
		<article className='container-home text-center'>
			{loading ? (
				<div className='mt-5'>
					<h2>Loading...</h2>
				</div>
			) : (
				<div className='user-card'>
					<h1>Hey there, {user && user.name}!</h1>
					<div
						onClick={() => onLogout()}
						href=''
						className='btn btn-primary btn-lg'
					>
						Click here to log out
					</div>
				</div>
			)}
		</article>
	);
};

export default Home;
