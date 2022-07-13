import { uiActions } from './ui-slice';

export const setColorMode = (colorMode) => (dispatch) => {
	const storedColorMode = localStorage.getItem('color-mode');

	const query = '(prefers-color-scheme: dark)';
	const { matches: prefersDarkMode } = window.matchMedia(query);
	const systemColorMode = prefersDarkMode ? 'dark' : 'light';

	if (!colorMode) colorMode = storedColorMode ?? 'system';
	const colorTheme = colorMode === 'system' ? systemColorMode : colorMode;

	localStorage.setItem('color-mode', colorMode);
	document.documentElement.className = colorTheme;

	dispatch(uiActions.setColorMode({ colorMode, colorTheme }));
};
