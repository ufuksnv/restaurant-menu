import { configureStore } from '@reduxjs/toolkit';

import ui from './ui-slice';
import menu from './menu-slice';

const store = configureStore({ reducer: { ui, menu } });

export default store;
