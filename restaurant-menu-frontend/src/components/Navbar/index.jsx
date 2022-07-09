import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { MdContactSupport } from 'react-icons/md';

const Navbar = ({ className = '' }) => {
	return (
		<nav
			className={`px-4 flex flex-col lg:flex-row lg:gap-12 rounded-lg shadow-md lg:shadow-none bg-white dark:bg-dark-100 lg:bg-transparent lg:dark:bg-transparent transition-colors ${className}`.trim()}
		>
			<NavLink
				to='/'
				className={({ isActive }) =>
					`flex lg:block items-center gap-4 py-3 lg:p-0 font-medium text-lg hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent transition-colors dark:border-charcoal-200 border-b lg:border-none last:border-none ${
						isActive
							? 'text-dark-primary dark:text-light-primary'
							: 'text-dark-disabled dark:text-light-disabled'
					}`
				}
			>
				<span className='h-9 grid lg:hidden place-items-center aspect-square'>
					<AiFillHome className='text-3xl' />
				</span>
				HOME
			</NavLink>
			<NavLink
				to='/menu'
				className={({ isActive }) =>
					`flex lg:block items-center gap-4 py-3 lg:p-0 font-medium text-lg hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent transition-colors dark:border-charcoal-200 border-b lg:border-none last:border-none ${
						isActive
							? 'text-dark-primary dark:text-light-primary'
							: 'text-dark-disabled dark:text-light-disabled'
					}`
				}
			>
				<span className='h-9 grid lg:hidden place-items-center aspect-square'>
					<CgMenuGridO className='text-3xl' />
				</span>
				MENU
			</NavLink>
			<NavLink
				to='/contact'
				className={({ isActive }) =>
					`flex lg:block items-center gap-4 py-3 lg:p-0 font-medium text-lg hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent transition-colors dark:border-charcoal-200 border-b lg:border-none last:border-none ${
						isActive
							? 'text-dark-primary dark:text-light-primary'
							: 'text-dark-disabled dark:text-light-disabled'
					}`
				}
			>
				<span className='h-9 grid lg:hidden place-items-center aspect-square'>
					<MdContactSupport className='text-3xl' />
				</span>
				CONTACT
			</NavLink>
		</nav>
	);
};

export default Navbar;
