import { useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';

import Container from '../Container';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Searchbar from '../Searchbar';
import Menu from '../Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);
  
	return (
		<header className='py-6 sm:py-8 md:py-10 lg:py-12'>
			<Container className='flex items-center justify-between gap-4'>
				<Logo />
				<Navbar isMobile={false}/>
        <Searchbar />
        <button className='lg:hidden h-12 grid place-items-center aspect-square' onClick={handleOpenMenu}>
          <RiMenu4Fill className='text-4xl' />
        </button>
        {isMenuOpen && <Menu onClose={handleCloseMenu} />}
			</Container>
		</header>
	);
};

export default Header;
