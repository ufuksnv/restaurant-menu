import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryIndex: null,
	categories: null,
};

const { actions, reducer } = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setMenu(state, action) {
			state.categoryIndex = action.payload.categoryIndex;
			state.categories = action.payload.categories;
		},
	},
});

export { actions as menuActions };

export default reducer;
