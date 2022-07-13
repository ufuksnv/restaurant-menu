import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from '../../store/menu-actions';
import Container from '../../components/Container';
import CategoryCarousel from './components/CategoryCarousel';
import CategoryItems from './components/CategoryItems';

let isInitial = true;

const Menu = () => {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.menu.categories);

	const [currentCategory, setCurrentCategory] = useState(null);

	useEffect(() => {
		if (!isInitial) return;
		dispatch(fetchCategories());
		isInitial = false;
	}, [dispatch]);

	useEffect(() => {
		if (!categories) return;
		setCurrentCategory(categories[0].body);
	}, [categories]);

	const handleShowCategory = (body) => () => setCurrentCategory(body);

	return (
		<Fragment>
			{categories && (
				<Container
					id='categories'
					element='section'
					className='px-0 sm:px-6 py-10 sm:py-12 flex gap-16'
				>
					<div className='w-full pt-6 pb-2 flex flex-col rounded-2xl gap-8 md:gap-10 lg:gap-14 bg-light-50 sm:bg-light-100 dark:bg-dark-50 sm:dark:bg-dark-100 transition-colors'>
						<CategoryCarousel
							categories={categories}
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
