import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Contact from '../../pages/Contact';

const Content = () => (
	<main id='main-content'>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/menu' element={<Menu />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	</main>
);

export default Content;
