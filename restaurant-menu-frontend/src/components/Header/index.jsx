import { useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';

import Container from '../Container';
import Logo from '../Logo';
import Menu from '../Menu';
import IconButton from '../IconButton';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleOpenMenu = () => setIsMenuOpen(true);
	const handleCloseMenu = () => setIsMenuOpen(false);

	return (
		<header className='h-24 sm:h-28 md:h-32 lg:h-36'>
			<Container className='h-full flex items-center justify-between gap-4'>
				<Logo />
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
