import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';

const Content = () => (
	<main id='main-content'>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</main>
);

export default Content;
