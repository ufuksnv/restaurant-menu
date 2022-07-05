import { NavLink } from 'react-router-dom';

const DesktopNavbar = () => {
	const classes = {
		nav: 'hidden lg:flex gap-12',
		link: 'text-lg font-medium text-[#353535] hover:opacity-70',
	};
	return (
		<nav className={classes.nav}>
			<NavLink to='/' className={classes.link}>
				HOME
			</NavLink>
			<NavLink to='/menu' className={classes.link}>
				MENU
			</NavLink>
			<NavLink to='/contact' className={classes.link}>
				CONTACT
			</NavLink>
		</nav>
	);
};

export default DesktopNavbar;
