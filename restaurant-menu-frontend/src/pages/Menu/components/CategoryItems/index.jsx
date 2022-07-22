import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategory } from '../../../../store/menu-actions';
import Container from '../../../../components/Container';
import Product from '../../../../components/Product';
import ProductDetailsModal from '../../../../components/ProductDetailsModal';

const CategoryItems = ({ category }) => {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.menu.products);
	const categories = useSelector((state) => state.menu.categories);

	const [details, setDetails] = useState(null);

	useEffect(() => {
		if (products?.[category]) return;
		dispatch(fetchCategory(category));
	}, [dispatch, category, products]);

	const handleShowDetails = (id) => () => {
		const product = products[category].find((product) => product.id === id);
		setDetails(product);
	};
	const handleCloseDetails = () => setDetails(null);

	const { title } = categories.find((item) => item.body === category);

	return (
		<Container
			id={category}
			element='section'
			className='p-6 mb-12 flex flex-col gap-8 md:gap-10 lg:gap-14'
		>
			<h2 className='whitespace-nowrap font-primary font-bold text-center text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl text-dark-primary dark:text-light-primary transition-colors'>
				{title}
			</h2>
			<div className='flex flex-wrap justify-center gap-6'>
				{products?.[category]?.map(({ id, name, price, image }) => (
					<Product
						key={id}
						name={name}
						price={price}
						image={image}
						className='sm:dark:bg-dark-100'
						onClick={handleShowDetails(id)}
					/>
				))}
			</div>
			{details && (
				<ProductDetailsModal product={details} onClose={handleCloseDetails} />
			)}
		</Container>
	);
};

export default CategoryItems;
