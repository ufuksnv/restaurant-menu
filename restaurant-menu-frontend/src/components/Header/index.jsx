import { useState, useEffect } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';

import Container from '../Container';
import Logo from '../Logo';
import Menu from '../Menu';
import IconButton from '../IconButton';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrollBelow = window.scrollY > 0;
			if (isScrollBelow === isFixed) return;
			setIsFixed(isScrollBelow);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isFixed]);

	const handleOpenMenu = () => setIsMenuOpen(true);
	const handleCloseMenu = () => setIsMenuOpen(false);

	return (
		<header
			className={`fixed top-0 inset-x-0 z-30 transition-[height,box-shadow] duration-1000 before:absolute before:inset-0 before:-z-10 before:bg-light-50 before:dark:bg-dark-50 before:transition-colors ${
				isFixed ? 'h-16 sm:h-20 shadow-md' : 'h-24 sm:h-28 md:h-32 lg:h-36'
			}`}
		>
			<Container className='h-full flex items-center justify-between gap-4'>
				<Logo className='sm:text-5xl lg:text-4xl xl:text-5xl' />
				<IconButton
					isHidden={isMenuOpen}
					className='lg:hidden h-9 grid place-items-center aspect-square text-4xl text-dark-primary dark:text-light-primary transition-colors'
					onClick={handleOpenMenu}
					icon={RiMenu4Fill}
				/>
				<Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
			</Container>
		</header>
	);
};

export default Header;
