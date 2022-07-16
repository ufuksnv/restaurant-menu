import { useEffect, Fragment } from 'react';

import { useDispatch } from 'react-redux/es/exports';
import { setColorMode } from './store/ui-actions';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(setColorMode()), [dispatch]);

	return (
		<Fragment>
			<Header />
			<Content />
			<Footer />
		</Fragment>
	);
};

export default App;
