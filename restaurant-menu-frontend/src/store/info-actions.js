import { infoActions } from './info-slice';

export const fetchInfo = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch('/api/contact');
			const data = await response.json();
			const convertedData = {
				address: data[0].address,
				phone: data[0].phoneNumber,
				email: data[0].eMail,
				whatsapp: data[0].whatssappNumber,
				facebook: data[0].facebookAddress,
				instagram: data[0].instagramAddress,
				twitter: data[0].twitterAddress,
			};
			return convertedData;
		};
		fetchData().then((data) => dispatch(infoActions.setInfo(data)));
	};
};
