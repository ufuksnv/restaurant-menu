import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import CategoryCard from '../CategoryCard';

const CategoryCarousel = ({ categories, onShowCategory }) => {
	return (
		<Swiper
			modules={[Autoplay, Pagination]}
			spaceBetween={16}
			slidesPerView={'auto'}
			pagination={{ clickable: true }}
			loop={true}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			centeredSlides={true}
			className='swiper-variant'
		>
			{categories.map(({ id, title, image, controller, body }) => (
				<SwiperSlide key={id}>
					<CategoryCard
						id={id}
						title={title}
						image={image}
						controller={controller}
						body={body}
						onClick={onShowCategory(body)}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CategoryCarousel;
