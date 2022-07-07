import { useState, useEffect } from 'react';

import Product from '../../components/Product';

const Menu = () => {
	const [foods, setFoods] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/api/maincourse');
			const data = await response.json();
			const convertedData = data.map((food) => ({
				id: food.mainCourseID,
				name: food.mainCourseName,
				price: food.mainCoursePrice,
				image: food.mainCourseImage,
			}));
			return convertedData;
		};
		fetchData().then((data) => {
			setFoods(data);
		});
	}, []);

  const handleClick = (id) => {
    const fetchFood = async () => {
      const response = await fetch(`/api/maincourse/${id}`);
      const data = await response.json();
      const convertedData = {
        id: data.mainCourseID,
        name: data.mainCourseName,
        price: data.mainCoursePrice,
        image: data.mainCourseImage,
      }
      console.log(convertedData);
      return convertedData;
    }
    fetchFood();
  }
	return (
		<div className='flex justify-center gap-6'>
			{foods &&
				foods.map(({ id, name, price, image }) => (
					<Product key={id} id={id} name={name} price={price} image={image} onClick={handleClick.bind(null, id)} />
				))}
		</div>
	);
};

export default Menu;
