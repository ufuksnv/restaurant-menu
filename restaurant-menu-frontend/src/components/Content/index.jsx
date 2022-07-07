import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Menu from '../../pages/Menu';

const Content = () => (
	<main id='main-content'>
		<Routes>
			<Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
		</Routes>
	</main>
);

export default Content;
