import { useState, useEffect } from 'react';

const useColorMode = () => {
	const storedColorMode = localStorage.getItem('color-mode');
	const query = '(prefers-color-scheme: dark)';
	const { matches: prefersDarkMode } = window.matchMedia(query);

	const isColorModeSystem = storedColorMode === 'system';
	const systemColorMode = prefersDarkMode ? 'dark' : 'light';

	const initialState = isColorModeSystem ? systemColorMode : storedColorMode;
	const [colorMode, setColorMode] = useState(initialState);

	const colorTheme = colorMode !== 'system' ? colorMode : systemColorMode;

	useEffect(() => {
		localStorage.setItem('color-mode', colorMode);
		document.documentElement.className = colorTheme;
	}, [colorMode, colorTheme]);

	return { colorMode, setColorMode, colorTheme };
};

export default useColorMode;
