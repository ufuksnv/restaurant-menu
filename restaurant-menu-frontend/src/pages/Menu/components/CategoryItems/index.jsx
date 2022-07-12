import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategory } from '../../../../store/menu-actions';
import Container from '../../../../components/Container';
import Product from '../../../../components/Product';

const CategoryItems = ({ category }) => {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.menu.products);
	const categories = useSelector((state) => state.menu.categories);

	useEffect(() => {
		if (products?.[category]) return;
		dispatch(fetchCategory(category));
	}, [dispatch, category, products]);

	const handleShowDetails = (id) => () => {
		const product = products[category].find((product) => product.id === id);
		const details = `${product.name} - $${product.price}`;
		alert(details);
	};

	const { title } = categories.find((item) => item.body === category);

	return (
		<Container
			id={category}
			element='section'
			className='p-6 mb-12 rounded-lg dark:shadow-md bg-light-50 dark:bg-dark-100 transition-colors'
		>
			<h2 className='mb-6 font-bold text-4xl'>{title}</h2>
			<div className='flex flex-wrap gap-6'>
				{products?.[category]?.map(({ id, name, price, image }) => (
					<Product
						key={id}
						name={name}
						price={price}
						image={image}
						onClick={handleShowDetails(id)}
					/>
				))}
			</div>
		</Container>
	);
};

export default CategoryItems;
