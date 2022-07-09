import Button from '../Button';

const Product = ({ id, name, price, image, onClick }) => {
	return (
		<div className='relative max-w-xs p-8 lg:p-10 flex flex-col items-center gap-4 lg:gap-6 overflow-hidden rounded-2xl shadow-md bg-light-50 dark:bg-dark-100 sm:dark:bg-dark-50 transition-colors'>
			<div className='absolute top-0 right-0 px-3 rounded-bl-2xl bg-accent'>
				<p className='font-semibold text-white text-lg text-left'>${price}</p>
			</div>
			<img
				className='w-32 lg:w-36 mx-6 aspect-[4/3] object-contain'
				src={image}
				alt={name}
			/>
			<h3 className='font-semibold text-2xl text-dark-primary dark:text-light-primary transition-colors'>{name}</h3>
			<Button className='w-full px-5 py-2 lg:px-6 lg:py-3 text-base' onClick={onClick}>Details</Button>
		</div>
	);
};

export default Product;
