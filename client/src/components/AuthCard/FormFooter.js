import React from 'react';
import './style.scss';

const FormFooter = (props) => {
	const { authType, setAuthType } = props;
	return (
		<div className='form-footer'>
			<div className='form-footer-text text-center'>
				{authType !== 'login' ? (
					<p>
						Have an account?{' '}
						<span onClick={() => setAuthType('login')}>Log in</span>
					</p>
				) : (
					<p>
						Don't Have an account?{' '}
						<span onClick={() => setAuthType('register')}>
							Sign Up
						</span>{' '}
					</p>
				)}
			</div>
		</div>
	);
};

export default FormFooter;
