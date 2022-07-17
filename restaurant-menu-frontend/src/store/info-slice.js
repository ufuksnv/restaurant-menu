import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	address: null,
	phone: null,
	email: null,
	whatsapp: null,
	facebook: null,
	instagram: null,
	twitter: null,
};

const { actions, reducer } = createSlice({
	name: 'info',
	initialState,
	reducers: {
		setInfo: (state, action) => {
			state.address = action.payload.address;
			state.phone = action.payload.phone;
			state.email = action.payload.email;
			state.whatsapp = action.payload.whatsapp;
			state.facebook = action.payload.facebook;
			state.instagram = action.payload.instagram;
			state.twitter = action.payload.twitter;
		},
	},
});

export { actions as infoActions };
export default reducer;
