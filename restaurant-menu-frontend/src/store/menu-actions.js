import { menuActions } from './menu-slice';

export const fetchCategories = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch('/api/category');
			const data = await response.json();
			const convertedData = data.map((item) => ({
				id: item.id,
				title: item.tittle,
				image: item.tittleImage,
				controller: item.controllerAdress,
				body: item.body,
			}));
			return convertedData;
		};
		fetchData().then((data) => dispatch(menuActions.setCategories(data)));
	};
};

export const fetchCategory = (category) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(`/api/${category.toLowerCase()}`);
			const data = await response.json();
			const convertedData = data.map((item) => ({
				id: item[category + 'ID'],
				name: item[category + 'Name'],
				price: item[category + 'Price'],
				image: item[category + 'Image'],
				details: item[category + 'Details'],
				allergens: {
					milk: item.milkAllert,
					wheat: item.wheatAllert,
					hazelnut: item.hazelnutAllert,
				},
			}));
			return { [category]: convertedData };
		};
		fetchData().then((data) => dispatch(menuActions.addProducts(data)));
	};
};
