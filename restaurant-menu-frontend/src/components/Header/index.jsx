import Container from '../Container';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Searchbar from '../Searchbar';

const Header = () => {
	return (
		<header className='py-10'>
			<Container className='flex items-center justify-between gap-4'>
				<Logo />
				<Navbar />
        <Searchbar />
			</Container>
		</header>
	);
};

export default Header;
