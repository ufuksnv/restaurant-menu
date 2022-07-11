import { useState, useEffect, Fragment } from 'react';

import Container from '../../components/Container';
import Product from '../../components/Product';

const Menu = () => {
	const [menu, setMenu] = useState(null);

	useEffect(() => {
		const fetchMenu = async (url, category) => {
			const response = await fetch(url);
			const data = await response.json();
			const convertedData = data.map((item) => ({
				id: item[category + 'ID'],
				name: item[category + 'Name'],
				price: item[category + 'Price'],
				image: item[category + 'Image'],
			}));
			return convertedData;
		};

		const getMenu = async () => {
			const mainCourses = fetchMenu('/api/maincourse', 'mainCourse');
			const desserts = fetchMenu('/api/dessert', 'dessert');
			const soups = fetchMenu('/api/soup', 'soup');
			const salads = fetchMenu('/api/salad', 'salad');
			const coldDrinks = fetchMenu('/api/colddrink', 'coldDrink');
			const hotDrinks = fetchMenu('/api/hotdrink', 'hotDrink');
			return {
				mainCourses: await mainCourses,
				desserts: await desserts,
				soups: await soups,
				salads: await salads,
				coldDrinks: await coldDrinks,
				hotDrinks: await hotDrinks,
			};
		};

		const dispatchMenu = async () => {
			const menu = await getMenu();
			setMenu(menu);
		};
		dispatchMenu();
	}, []);

	const handleShowDetails = (id, category) => () => {
		const categoryQueryBody = category.slice(0, -1);
		const categoryController = categoryQueryBody.toLowerCase();

		const fetchProduct = async () => {
			const response = await fetch(`/api/${categoryController}/${id}`);
			const data = await response.json();
			const convertedData = {
				id: data[categoryQueryBody + 'ID'],
				name: data[categoryQueryBody + 'Name'],
				price: data[categoryQueryBody + 'Price'],
				image: data[categoryQueryBody + 'Image'],
			};
			return convertedData;
		};

		const showDetails = async () => {
			const product = await fetchProduct();
			alert(`${product.name} - $${product.price}`);
		};
		showDetails();
	};

	const categoryTitles = {
		mainCourses: 'Main Courses',
		desserts: 'Desserts',
		soups: 'Soups',
		salads: 'Salads',
		coldDrinks: 'Cold Drinks',
		hotDrinks: 'Hot Drinks',
	};

	return (
		<Fragment>
			{menu ? (
				Object.keys(menu).map((category) => {
					return (
						<Container
							key={category}
							id={category}
							element='section'
							className='p-6 mb-12 rounded-lg dark:shadow-md bg-light-50 dark:bg-dark-100 transition-colors'
						>
							<h2 className='mb-6 font-bold text-4xl'>
								{categoryTitles[category]}
							</h2>
							<div className='flex flex-wrap gap-6'>
								{menu[category].map(({ id, name, price, image }) => (
									<Product
										key={id}
										name={name}
										price={price}
										image={image}
										onClick={handleShowDetails(id, category)}
									/>
								))}
							</div>
						</Container>
					);
				})
			) : (
				<p className='w-full py-6 font-medium text-center text-xl text-dark-primary dark:text-light-primary'>
					Loading...
				</p>
			)}
		</Fragment>
	);
};

export default Menu;
