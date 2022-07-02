import Container from '../Container';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
	return (
		<header className='py-6'>
			<Container className='flex items-center justify-between gap-4'>
				<Logo />
				<Navbar />
			</Container>
		</header>
	);
};

export default Header;
