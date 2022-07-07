import { Fragment } from 'react';

import HeroSection from './components/HeroSection';
import BestSellerSection from './components/BestSellerSection';

const Home = () => {
	return (
		<Fragment>
			<HeroSection />
			<BestSellerSection />
		</Fragment>
	);
};

export default Home;
