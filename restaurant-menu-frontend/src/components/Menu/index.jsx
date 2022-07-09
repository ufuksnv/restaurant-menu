import { RiCloseFill } from 'react-icons/ri';

import Navbar from '../Navbar';
import Searchbar from '../Searchbar';
import IconButton from '../IconButton';
import ColorModeMenu from '../ColorModeMenu';
import ColorModeGroup from '../ColorModeGroup';

const Menu = ({ isOpen, onClose }) => {
	return (
		<div className={`${!isOpen ? 'hidden lg:block' : 'block'} fixed lg:static bg-[rgba(0,0,0,0.5)] lg:bg-transparent transition-colors inset-0 z-50 lg:z-auto`}>
			<div className='max-w-full p-4 lg:p-0 flex flex-col absolute inset-y-0 right-0 gap-6 lg:gap-12 bg-light-50 dark:bg-dark-50 transition-colors lg:flex-row lg:items-center lg:static'>
        <IconButton
          isHidden={!isOpen}
					className='lg:hidden h-9 mr-2 ml-auto text-4xl mt-[0.875rem] sm:mt-[1.375rem] md:mt-[1.875rem] text-dark-primary dark:text-light-primary transition-colors'
          icon={RiCloseFill}
					onClick={onClose}
				/>
				<Navbar className='order-2 lg:order-1' />
				<Searchbar className='order-1 lg:order-2' />
        <ColorModeMenu className='hidden lg:flex order-3' />
        <ColorModeGroup className='flex lg:hidden order-3' />
			</div>
		</div>
	);
};

export default Menu;
