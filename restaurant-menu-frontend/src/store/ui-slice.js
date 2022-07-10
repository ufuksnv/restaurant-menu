import { createSlice } from '@reduxjs/toolkit';

const storedColorMode = localStorage.getItem('color-mode');
const query = '(prefers-color-scheme: dark)';
const { matches: prefersDarkMode } = window.matchMedia(query);

const isColorModeSystem = storedColorMode === 'system';
const systemColorMode = prefersDarkMode ? 'dark' : 'light';

const colorMode = isColorModeSystem ? systemColorMode : storedColorMode;
const colorTheme = colorMode !== 'system' ? colorMode : systemColorMode;

const initialState = { colorMode, colorTheme };

const { actions, reducer } = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setColorMode(state, action) {
			state.colorMode = action.payload.colorMode;
			state.colorTheme = action.payload.colorTheme;
		},
	},
});

export { actions as uiActions };

export default reducer;
