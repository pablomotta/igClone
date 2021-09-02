import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';
import igLogo from './img/instagram-logo.png';
import facebookLogo from './img/facebook.png';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const RegisterForm = () => {
	const history = useHistory();
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

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
		name: '',
		username: '',
		password: '',
	});

	const { email, name, username, password } = user;

	const onChange = (e) =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if ((email === '') | (name === '') | (username === '')) {
			setAlert('Please fill in all fields', 'danger');
		} else if (password.length <= 6) {
			setAlert('Password needs to have 6 characters or more', 'danger');
		} else {
			register({
				email,
				name,
				username,
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
				<h2 className='register-call-to-action'>
					Sign up to see photos and videos from your friends.
				</h2>
				<a
					href='https://www.facebook.com/'
					target='_blank'
					rel='noreferrer'
					className='btn btn-login btn-block text-center btn-facebook-signup'
				>
					<img src={facebookLogo} alt='facebook logo' />{' '}
					<span>Log in with Facebook</span>
				</a>
				<div className='form-container--or mb-register--or'>
					<div className='line'></div>
					<p>OR</p>
					<div className='line'></div>
				</div>
				<div className='form-group'>
					<input
						placeholder='Email'
						type='email'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						placeholder='Full name'
						type='text'
						name='name'
						value={name}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						placeholder='Username'
						type='text'
						name='username'
						value={username}
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
					value='Sign Up'
					className='btn btn-login btn-block'
				/>

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

export default RegisterForm;
