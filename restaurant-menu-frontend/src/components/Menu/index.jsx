import { RiCloseFill } from 'react-icons/ri';

import Navbar from '../Navbar';
import Searchbar from '../Searchbar';
import IconButton from '../IconButton';

const Menu = ({ isOpen, onClose }) => {
	return (
		<div className={`${!isOpen ? 'hidden lg:block' : 'block'} fixed bg-[rgba(0,0,0,0.5)] inset-0 z-50 lg:static lg:bg-transparent lg:z-auto`}>
			<div className='max-w-full p-4 lg:p-0 flex flex-col absolute inset-y-0 right-0 gap-6 lg:gap-12 bg-light-50 dark:bg-dark-50 lg:flex-row lg:items-center lg:static'>
        <IconButton
          isHidden={!isOpen}
					className='lg:hidden mr-2 ml-auto text-4xl mt-[0.875rem] sm:mt-[1.375rem] md:mt-[1.875rem]'
          icon={RiCloseFill}
					onClick={onClose}
				/>
				<Navbar className='order-2 lg:order-1' />
				<Searchbar className='order-1 lg:order-2' />
			</div>
		</div>
	);
};

export default Menu;
