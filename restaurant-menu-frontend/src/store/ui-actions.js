import { uiActions } from './ui-slice';

export const setColorMode = (colorMode) => (dispatch) => {
	const query = '(prefers-color-scheme: dark)';
	const { matches: prefersDarkMode } = window.matchMedia(query);
	const systemColorMode = prefersDarkMode ? 'dark' : 'light';
	const colorTheme = colorMode === 'system' ? systemColorMode : colorMode;

	localStorage.setItem('color-mode', colorMode);
	document.documentElement.className = colorTheme;

	dispatch(uiActions.setColorMode({ colorMode, colorTheme }));
};
