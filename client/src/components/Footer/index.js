import React from 'react';
import './style.scss';

const Footer = () => {
	const getYear = () => {
		let date = new Date();
		let year = date.getFullYear();
		return year;
	};
	const year = getYear();

	return (
		<footer>
			<div className='footer-links'>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					About
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Blog
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Jobs
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Help
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					API
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Privacy
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Terms
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Top Accounts
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Hashtags
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Locations
				</a>
			</div>
			<div className='footer-links'>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Beauty
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Dance
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Fitness
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Food &amp; Drinks
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Home &amp; Garden
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Music
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'
				>
					Visual Arts
				</a>
			</div>
			<div className='row-copyright'>
				<a href='https://www.instagram.com/'>
					English{' '}
					<span>
						<i className='arrow down' />
					</span>
				</a>
				<span className=''>
					&copy;
					{year} &nbsp;Instagram from Facebook
				</span>
			</div>
		</footer>
	);
};

export default Footer;
