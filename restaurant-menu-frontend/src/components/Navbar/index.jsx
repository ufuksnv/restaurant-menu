import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { MdContactSupport } from 'react-icons/md';

const Navbar = ({ className = '' }) => {
	return (
		<nav
			className={`lg:px-4 flex flex-col lg:flex-row lg:gap-12 rounded-lg shadow-md lg:shadow-none bg-white dark:bg-dark-100 lg:bg-transparent lg:dark:bg-transparent transition-colors ${className}`.trim()}
		>
			<NavLink
				to='/'
				className={({ isActive }) =>
					` flex lg:block items-center gap-4 px-4 py-3 lg:p-0 rounded-t-lg lg:rounded-none font-medium text-lg hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent hover:bg-light-200 lg:hover:bg-transparent dark:hover:bg-dark-200 lg:dark:hover:bg-transparent transition-colors ${
						isActive
							? 'text-dark-primary dark:text-light-primary'
							: 'text-dark-disabled dark:text-light-disabled'
					}`
				}
			>
				<AiFillHome className='lg:hidden text-3xl' />
				HOME
			</NavLink>
			<NavLink
				to='/menu'
				className={({ isActive }) =>
					`flex lg:block items-center gap-4 px-4 py-3 lg:p-0 font-medium text-lg hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent hover:bg-light-200 lg:hover:bg-transparent dark:hover:bg-dark-200 lg:dark:hover:bg-transparent transition-colors ${
						isActive
							? 'text-dark-primary dark:text-light-primary'
							: 'text-dark-disabled dark:text-light-disabled'
					}`
				}
			>
				<CgMenuGridO className='lg:hidden text-3xl' />
				MENU
			</NavLink>
			<NavLink
				to='/contact'
				className={({ isActive }) =>
					`flex lg:block items-center gap-4 px-4 py-3 lg:p-0 rounded-b-lg lg:rounded-none font-medium text-lg hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent hover:bg-light-200 lg:hover:bg-transparent dark:hover:bg-dark-200 lg:dark:hover:bg-transparent transition-colors ${
						isActive
							? 'text-dark-primary dark:text-light-primary'
							: 'text-dark-disabled dark:text-light-disabled'
					}`
				}
			>
				<MdContactSupport className='lg:hidden text-3xl' />
				CONTACT
			</NavLink>
		</nav>
	);
};

export default Navbar;
