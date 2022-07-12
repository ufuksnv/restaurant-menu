import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from '../../store/menu-actions';
import CategoryCard from './components/CategoryCard';
import CategoryItems from './components/CategoryItems';
import Container from '../../components/Container';

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
			<Container
				id='categories'
				element='section'
				className='p-6 mb-12 flex gap-4 rounded-lg dark:shadow-md bg-light-50 dark:bg-dark-100 transition-colors'
			>
				{categories?.map(({ id, title, image, controller, body }) => (
					<CategoryCard
						key={id}
						id={id}
						title={title}
						image={image}
						controller={controller}
						body={body}
						onClick={handleShowCategory(body)}
					/>
				))}
			</Container>
			{currentCategory && <CategoryItems category={currentCategory} />}
		</Fragment>
	);
};

export default Menu;
