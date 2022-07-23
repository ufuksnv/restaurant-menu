import { Fragment, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import Product from '../../../../components/Product';
import ProductDetailsModal from '../../../../components/ProductDetailsModal';

const ProductCarousel = ({ products }) => {
	const [details, setDetails] = useState(null);
	const handleShowDetails = (product) => () => setDetails(product);
	const handleHideDetails = () => setDetails(null);

	return (
		<Fragment>
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
				{products.map((product, i) => (
					<SwiperSlide key={i}>
						<Product
							name={product.name}
							price={product.price}
							image={product.image}
							onClick={handleShowDetails(product)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			{details && (
				<ProductDetailsModal product={details} onClose={handleHideDetails} />
			)}
		</Fragment>
	);
};

export default ProductCarousel;
