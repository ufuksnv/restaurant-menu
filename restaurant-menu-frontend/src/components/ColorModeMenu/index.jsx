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

	const colorScheme = colorMode !== 'system' ? colorMode : systemColorMode;

	useEffect(() => {
		localStorage.setItem('color-mode', colorMode);
		document.documentElement.className = colorScheme;
	}, [colorMode, colorScheme]);

	const handleToggle = () => setIsOpen((prev) => !prev);
	const handleBlur = (e) =>
		!e.currentTarget.contains(e.relatedTarget) && setIsOpen(false);
	const handleSetColorMode = (mode) => setColorMode(mode);

	return (
		<div className={`relative flex ${className}`} onBlur={handleBlur}>
			<IconButton
				className='h-12 text-xl rounded-full dark:shadow-md text-dark-primary dark:text-light-primary bg-light-50 dark:bg-dark-100 transition-colors'
				icon={colorScheme === 'dark' ? MdDarkMode : MdLightMode}
				onClick={handleToggle}
			/>
			{isOpen && (
				<div className='py-2 mt-4 flex flex-col absolute top-full right-0 rounded-lg shadow-md bg-light-50 dark:bg-dark-100 transition-colors'>
					<button
						className={`px-4 py-1.5 flex items-center gap-3 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 transition-colors ${
							colorMode === 'light'
								? 'text-dark-primary dark:text-light-primary'
								: 'text-dark-disabled dark:text-light-disabled hover:text-dark-secondary hover:dark:text-light-secondary'
						}`}
						onClick={handleSetColorMode.bind(null, 'light')}
					>
						<MdLightMode />
						Light
					</button>
					<button
						className={`px-4 py-1.5 flex items-center gap-3 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 transition-colors ${
							colorMode === 'dark'
								? 'text-dark-primary dark:text-light-primary'
								: 'text-dark-disabled dark:text-light-disabled hover:text-dark-secondary hover:dark:text-light-secondary'
						}`}
						onClick={handleSetColorMode.bind(null, 'dark')}
					>
						<MdDarkMode />
						Dark
					</button>
					<button
						className={`px-4 py-1.5 flex items-center gap-3 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 transition-colors ${
							colorMode === 'system'
								? 'text-dark-primary dark:text-light-primary'
								: 'text-dark-disabled dark:text-light-disabled hover:text-dark-secondary hover:dark:text-light-secondary'
						}`}
						onClick={handleSetColorMode.bind(null, 'system')}
					>
						<CgScreen />
						System
					</button>
				</div>
			)}
		</div>
	);
};

export default ColorModeMenu;
