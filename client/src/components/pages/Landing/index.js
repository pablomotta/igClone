import React from 'react';

import './style.scss';
// images
import phones from './img/phones.png';
import bg1 from './img/ig-1.jpeg';
import bg2 from './img/ig-2.jpeg';
import bg3 from './img/ig-3.jpeg';
import bg4 from './img/ig-4.jpeg';
import bg5 from './img/ig-5.jpeg';

import AuthCard from '../../AuthCard';

const Landing = () => {
	return (
		<article className='container-landing'>
			<div className='container-image'>
				<img className='phones' src={phones} alt='phones' />
				<div className='image-backgrounds' id='slider'>
					<img src={bg1} alt='background 1' />
					<img src={bg2} alt='background 2' />
					<img src={bg3} alt='background 3' />
					<img src={bg4} alt='background 4' />
					<img src={bg5} alt='background 5' />
				</div>
			</div>
			<AuthCard />
		</article>
	);
};

export default Landing;
