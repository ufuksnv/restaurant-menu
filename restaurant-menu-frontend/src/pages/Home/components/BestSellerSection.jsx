import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Container from '../../../components/Container';
import ProductCarousel from './ProductCarousel';

const BestSellerSection = () => {
	return (
		<Container
			element='section'
			id='best-seller'
			className='px-0 sm:px-6 py-10 sm:py-12 flex gap-16'
		>
			<div className='w-full sm:py-6 md:py-8 lg:py-12 flex flex-col rounded-2xl gap-8 md:gap-10 lg:gap-14 bg-light-50 sm:bg-light-100 dark:bg-dark-50 sm:dark:bg-dark-100 transition-colors'>
				<div className='px-6 md:px-8 lg:px-12 flex items-center justify-between'>
					<h2 className='whitespace-nowrap font-primary font-bold text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl text-dark-primary dark:text-light-primary transition-colors'>
						Best Selling
					</h2>
					<Link
						to='/menu'
						className='flex items-center gap-2 font-medium text-lg text-dark-primary dark:text-light-primary hover:text-accent dark:hover:text-accent transition-colors'
					>
						View All
						<AiOutlineArrowRight className='hidden sm:block' />
					</Link>
				</div>
				<ProductCarousel />
			</div>
		</Container>
	);
};

export default BestSellerSection;
