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
					className='px-0 pt-6 pb-2 mb-12 flex gap-4 rounded-lg sm:dark:shadow-md sm:bg-light-100 sm:dark:bg-dark-100 transition-colors'
				>
					<CategoryCarousel
						categories={categories}
						onShowCategory={handleShowCategory}
					/>
				</Container>
			)}
			{currentCategory && <CategoryItems category={currentCategory} />}
		</Fragment>
	);
};

export default Menu;
