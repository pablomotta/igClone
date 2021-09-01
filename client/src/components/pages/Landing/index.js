import React from 'react';

import './style.scss';
import phones from './phones.png';

import AuthCard from '../../AuthCard';

const Landing = () => {
	return (
		<article className='container-landing'>
			<div className='container-image'>
				<img className='phones' src={phones} alt='phones' />
			</div>
			<AuthCard />
		</article>
	);
};

export default Landing;
