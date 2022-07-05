import Navbar from '../Navbar';
import Searchbar from '../Searchbar';
import { RiCloseFill } from 'react-icons/ri';

const Menu = ({ onClose }) => {
	const handleClose = () => onClose();
	return (
		<div className='fixed bg-[rgba(0,0,0,0.5)] inset-0 z-50'>
			<div className='max-w-full px-4 py-6 sm:py-8 md:py-10 absolute top-0 bottom-0 right-0 flex flex-col gap-6 bg-white'>
				<button
					className='h-12 mr-2 ml-auto grid place-items-center aspect-square'
					onClick={handleClose}
				>
					<RiCloseFill className='text-4xl' />
				</button>
				<Searchbar className='w-64 sm:w-72 md:w-80' isMenu={true} />
				<Navbar />
			</div>
		</div>
	);
};

export default Menu;
