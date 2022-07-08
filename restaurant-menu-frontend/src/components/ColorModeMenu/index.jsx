import { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { CgScreen } from 'react-icons/cg';

import IconButton from '../IconButton';

const ColorModeMenu = ({ className }) => {
	const storedColorMode = localStorage.getItem('color-mode');
	const query = '(prefers-color-scheme: dark)';
	const { matches: prefersDarkMode } = window.matchMedia(query);

	const isColorModeSystem = storedColorMode === 'system';
	const systemColorMode = prefersDarkMode ? 'dark' : 'light';
	const initialState = isColorModeSystem ? systemColorMode : storedColorMode;
	const [colorMode, setColorMode] = useState(initialState);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		localStorage.setItem('color-mode', colorMode);
		const colorScheme = colorMode !== 'system' ? colorMode : systemColorMode;
		document.documentElement.className = colorScheme;
	}, [colorMode, systemColorMode]);

	const handleToggle = () => setIsOpen((prev) => !prev);
	const handleColorModeLight = () => setColorMode('light');
	const handleColorModeDark = () => setColorMode('dark');
	const handleColorModeSystem = () => setColorMode('system');

	return (
		<div className={`group relative flex ${className}`}>
			<IconButton
				className='h-12 rounded-full bg-light-50 dark:bg-dark-100 dark:shadow-md text-xl'
				icon={colorMode === 'dark' ? MdDarkMode : MdLightMode}
				onClick={handleToggle}
			/>
			<div
				className={`${
					isOpen ? 'flex' : 'hidden'
				} flex-col absolute py-2 mt-4 top-full right-0 rounded-lg bg-light-50 dark:bg-dark-100 shadow-md`}
			>
				<button
					className='flex items-center gap-3 px-4 py-1 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 relative before:absolute before:bottom-[-0.03125rem] before:bg-light-200 before:dark:bg-dark-200 before:w-[calc(100%-2rem)] before:h-[0.0625rem] before:mx-auto before:px-4'
					onClick={handleColorModeLight}
				>
					<MdLightMode />
					Light
				</button>
				<button
					className='flex items-center gap-3 px-4 py-1 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 relative before:absolute before:bottom-[-0.03125rem] before:bg-light-200 before:dark:bg-dark-200 before:w-[calc(100%-2rem)] before:h-[0.0625rem] before:mx-auto before:px-4'
					onClick={handleColorModeDark}
				>
					<MdDarkMode />
					Dark
				</button>
				<button
					className='flex items-center gap-3 px-4 py-1 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200'
					onClick={handleColorModeSystem}
				>
					<CgScreen />
					System
				</button>
			</div>
		</div>
	);
};

export default ColorModeMenu;
