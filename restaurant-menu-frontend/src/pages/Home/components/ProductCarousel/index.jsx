import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import Product from '../../../../components/Product';

const DUMMY_PRODUCTS = [
	{
		name: 'Burger',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/4d8e56589051427b5167c8b3e57dd805/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png',
	},
	{
		name: 'Pizza',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/4d8e56589051427b5167c8b3e57dd805/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png',
	},
	{
		name: 'Sushi',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/4d8e56589051427b5167c8b3e57dd805/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png',
	},
	{
		name: 'İskender',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/4d8e56589051427b5167c8b3e57dd805/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png',
	},
	{
		name: 'Kebap',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/4d8e56589051427b5167c8b3e57dd805/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png',
	},
];

const ProductCarousel = () => {
	return (
		<Swiper
			modules={[Autoplay, Navigation, Pagination]}
			spaceBetween={24}
			slidesPerView='auto'
			navigation={true}
			pagination={{ clickable: true }}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			loop={true}
			centeredSlides={true}
		>
			{DUMMY_PRODUCTS.map(({ name, price, image }, i) => (
				<SwiperSlide key={i}>
					<Product name={name} price={price} image={image} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductCarousel;
