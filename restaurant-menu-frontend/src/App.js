import { useEffect, Fragment } from 'react';

import { useDispatch } from 'react-redux/es/exports';
import { setColorMode } from './store/ui-actions';
import { fetchMenu } from './store/menu-actions';
import { fetchInfo } from './store/info-actions';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

let isInitial = true;

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isInitial) return;

		dispatch(setColorMode());
		dispatch(fetchMenu());
		dispatch(fetchInfo());

		isInitial = false;
	}, [dispatch]);

	return (
		<Fragment>
			<Header />
			<Content />
			<Footer />
		</Fragment>
	);
};

export default App;
