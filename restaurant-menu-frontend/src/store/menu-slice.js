import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: null,
	products: null,
};

const { actions, reducer } = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setCategories(state, action) {
			state.categories = [...action.payload];
		},
		addProducts(state, action) {
			state.products = { ...state.products, ...action.payload };
		},
	},
});

export { actions as menuActions };

export default reducer;
