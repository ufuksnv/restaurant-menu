import { menuActions } from './menu-slice';

export const fetchCategories = () => {
	return async (dispatch) => {
		const fetchCategoryIndex = async () => {
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
		const fetchCategory = async (category) => {
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
		const categoryIndex = await fetchCategoryIndex();
		const categories = await Promise.all(
			categoryIndex.map(async (category) => await fetchCategory(category.body))
		).then((category) =>
			category.reduce((acc, curr) => ({ ...acc, ...curr }), {})
		);
		dispatch(menuActions.setMenu({ categoryIndex, categories }));
	};
};
