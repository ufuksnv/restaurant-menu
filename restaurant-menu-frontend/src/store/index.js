import { configureStore } from '@reduxjs/toolkit';

import ui from './ui-slice';

const store = configureStore({ reducer: { ui } });

export default store;
