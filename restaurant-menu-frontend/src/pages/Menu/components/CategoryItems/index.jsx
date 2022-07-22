import { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../../components/Container';
import Product from '../../../../components/Product';
import ProductDetailsModal from '../../../../components/ProductDetailsModal';

const CategoryItems = ({ category }) => {
	const categoryIndex = useSelector((state) => state.menu.categoryIndex);
	const categories = useSelector((state) => state.menu.categories);

	const [details, setDetails] = useState(null);

	const handleShowDetails = (id) => () => {
		const product = categories[category].find((product) => product.id === id);
		setDetails(product);
	};
	const handleCloseDetails = () => setDetails(null);

	const { title } = categoryIndex.find((item) => item.body === category);

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
				{categories?.[category]?.map(({ id, name, price, image }) => (
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
