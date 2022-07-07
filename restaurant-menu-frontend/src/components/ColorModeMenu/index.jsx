import { useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

import IconButton from '../IconButton';

const ColorModeMenu = ({ className }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleClick = () => {
		document.documentElement.className = isDarkMode ? 'light' : 'dark';
		setIsDarkMode((prevState) => !prevState);
	};

  const classes = `h-12 rounded-full bg-light-50 dark:bg-dark-100 dark:shadow-md text-xl ${className}`.trim();

	return (
		<IconButton
			className={classes}
			icon={isDarkMode ? MdDarkMode : MdLightMode}
			onClick={handleClick}
		/>
	);
};

export default ColorModeMenu;
