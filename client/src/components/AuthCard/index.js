import React, { useState } from 'react';
import './style.scss';
import iOSApp from './img/applestore.png';
import androidApp from './img/googlestore.png';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import FormFooter from './FormFooter';

const AuthCard = () => {
	const [authType, setAuthType] = useState('login');
	return (
		<div className='container--auth'>
			{authType === 'login' ? <LoginForm /> : <RegisterForm />}
			<FormFooter authType={authType} setAuthType={setAuthType} />
			<div className='form--app-links-container text-center'>
				<p>Get the app.</p>
				<div className='form--app-links'>
					<a
						href='https://apps.apple.com/app/instagram/id389801252?vt=lo'
						target='_blank'
						rel='noreferrer'
					>
						<img src={iOSApp} alt='iOS app' />
					</a>
					<a
						href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9BCF756D-66CE-414F-BE0A-0644A7FB0441%26utm_content%3Dlo%26utm_medium%3Dbadge'
						target='_blank'
						rel='noreferrer'
					>
						<img src={androidApp} alt='iOS app' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AuthCard;
