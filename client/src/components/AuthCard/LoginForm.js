import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';
import igLogo from './img/instagram-logo.png';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const LoginForm = () => {
	const history = useHistory();
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/');
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if ((email === '') | (password === '')) {
			setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email,
				password,
			});
		}
	};
	return (
		<div className='form-container'>
			<div className='form-title text-center'>
				<img src={igLogo} alt='Instagram logo' />
			</div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						placeholder='Username, or email'
						type='email'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						placeholder='Password'
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
					/>
				</div>
				<input
					type='submit'
					value='Log In'
					className='btn btn-login btn-block'
				/>
				<div className='form-container--or'>
					<div className='line'></div>
					<p>OR</p>
					<div className='line'></div>
				</div>
				<a
					href='https://www.facebook.com/'
					className='facebook-auth text-center'
					target='_blank'
					rel='noreferrer'
				>
					<span className='facebook-logo'></span>
					<span className='facebook-auth-text'>
						Log in with facebook
					</span>
				</a>
				<div className='text-center forgot-password'>
					<a
						href='https://www.facebook.com/'
						target='_blank'
						rel='noreferrer'
					>
						Forgot password?
					</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
