import { configureStore } from '@reduxjs/toolkit';

import ui from './ui-slice';
import menu from './menu-slice';
import info from './info-slice';

const store = configureStore({ reducer: { ui, menu, info } });

export default store;
