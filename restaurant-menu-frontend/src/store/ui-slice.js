import { createSlice } from '@reduxjs/toolkit';

const initialState = { colorMode: null, colorTheme: null };

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
