import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import CategoryCarousel from './components/CategoryCarousel';
import CategoryItems from './components/CategoryItems';

const Menu = () => {
	const [currentCategory, setCurrentCategory] = useState(null);

	const categoryIndex = useSelector((state) => state.menu.categoryIndex);

	useEffect(() => {
		if (!categoryIndex) return;
		setCurrentCategory(categoryIndex[0].body);
	}, [categoryIndex]);

	const handleShowCategory = (body) => () => setCurrentCategory(body);

	return (
		<Fragment>
			{categoryIndex && (
				<Container
					id='categories'
					element='section'
					className='px-0 sm:px-6 py-10 sm:py-12 flex gap-16'
				>
					<div className='w-full pt-6 pb-2 flex flex-col rounded-2xl gap-8 md:gap-10 lg:gap-14 bg-light-50 sm:bg-light-100 dark:bg-dark-50 sm:dark:bg-dark-100 transition-colors'>
						<CategoryCarousel
							categories={categoryIndex}
							onShowCategory={handleShowCategory}
						/>
					</div>
				</Container>
			)}
			{currentCategory && <CategoryItems category={currentCategory} />}
		</Fragment>
	);
};

export default Menu;
