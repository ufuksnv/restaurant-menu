import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { MdContactSupport } from 'react-icons/md';

const MobileNavbar = () => {
	const classes = {
		nav: 'px-4 flex flex-col bg-white rounded-lg shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px]',
		link: 'text-lg font-medium text-[#353535] hover:opacity-70 flex items-center gap-4 py-3 border-b last:border-none',
    icon: 'h-9 grid place-items-center aspect-square',
	};
	return (
		<nav className={classes.nav}>
			<NavLink to='/' className={classes.link}>
				<span className={classes.icon}>
					<AiFillHome className='text-3xl' />
				</span>
				HOME
			</NavLink>
			<NavLink to='' className={classes.link}>
				<span className={classes.icon}>
					<CgMenuGridO className='text-3xl' />
				</span>
				MENU
			</NavLink>
			<NavLink to='' className={classes.link}>
				<span className={classes.icon}>
					<MdContactSupport className='text-3xl' />
				</span>
				CONTACT
			</NavLink>
		</nav>
	);
};

export default MobileNavbar;
