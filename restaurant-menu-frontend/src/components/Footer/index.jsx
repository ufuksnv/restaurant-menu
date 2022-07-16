import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Container from '../Container/index';
import Logo from './../Logo/index';
import IconLink from '../IconLink';

const Footer = () => {
	return (
		<footer
			id='footer'
			className='mt-10 sm:mt-12 flex flex-col bg-light-200 dark:bg-dark-100 transition-colors'
		>
			<Container className='py-10 sm:py-12 flex flex-col sm:flex-row items-center sm:justify-between gap-6'>
				<div className='grid grid-rows-5 items-center gap-2 text-center sm:text-left'>
					<Logo className='row-span-2 text-dark-primary dark:text-light-primary transition-colors' />
					<div className='row-span-3 flex flex-col gap-2'>
						<p className='text-dark-secondary dark:text-light-secondary transition-colors'>
							Ankara, Turkey
						</p>
						<a
							href='/'
							className='text-dark-secondary dark:text-light-secondary transition-colors'
						>
							+90 123 456 7890
						</a>
						<a
							href='/'
							className='text-dark-secondary dark:text-light-secondary transition-colors'
						>
							info@restaurant.com
						</a>
					</div>
				</div>
				<div className='grid grid-rows-5 text-center sm:text-left'>
					<h5 className='row-span-2 place-self-center font-bold text-2xl text-dark-primary dark:text-light-primary transition-colors'>
						Quick Links
					</h5>
					<div className='row-span-3 flex flex-col gap-2'>
						<Link
							to='/'
							className='text-dark-secondary dark:text-light-secondary hover:text-accent hover:dark:text-accent focus-visible:text-accent focus-visible:dark:text-accent transition-colors'
						>
							Home
						</Link>
						<Link
							to='/'
							className='text-dark-secondary dark:text-light-secondary hover:text-accent hover:dark:text-accent focus-visible:text-accent focus-visible:dark:text-accent transition-colors'
						>
							Menu
						</Link>
						<Link
							to='/'
							className='text-dark-secondary dark:text-light-secondary hover:text-accent hover:dark:text-accent focus-visible:text-accent focus-visible:dark:text-accent transition-colors'
						>
							Contact
						</Link>
					</div>
				</div>
				<div className='flex sm:flex-col gap-2'>
					<IconLink
						href='https://www.facebook.com'
						alt='facebook'
						color='#4267B2'
						icon={<FaFacebookF size={18} className='z-10' />}
					/>
					<IconLink
						href='https://www.twitter.com'
						alt='twitter'
						color='#1DA1F2'
						icon={<FaTwitter size={18} className='z-10' />}
					/>
					<IconLink
						href='https://www.instagram.com'
						alt='instagram'
						color='linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
						icon={<FaInstagram size={18} className='z-10' />}
					/>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
