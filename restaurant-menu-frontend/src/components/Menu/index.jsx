import { RiCloseFill } from 'react-icons/ri';

import Navbar from '../Navbar';
import Searchbar from '../Searchbar';

const Menu = ({ isOpen, onClose }) => {
	return (
		<div className={`${!isOpen ? 'hidden lg:block' : 'block'} fixed bg-[rgba(0,0,0,0.5)] inset-0 z-50 lg:static lg:bg-transparent lg:z-auto`}>
			<div className='max-w-full px-4 py-6 flex flex-col absolute inset-y-0 right-0 gap-6 lg:gap-12 bg-white sm:py-8 md:py-10 lg:p-0 lg:flex-row lg:items-center lg:static'>
				{isOpen && (
					<button
						className='lg:hidden h-12 mr-2 ml-auto grid place-items-center aspect-square'
						onClick={onClose}
					>
						<RiCloseFill className='text-4xl' />
					</button>
				)}
				<Navbar className='order-2 lg:order-1' />
				<Searchbar className='order-1 lg:order-2' />
			</div>
		</div>
	);
};

export default Menu;
