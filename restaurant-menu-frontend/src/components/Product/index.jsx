import Button from '../Button';

const Product = ({ name, price, image, className, onClick }) => {
	return (
		<div
			className={`relative max-w-[18rem] w-full p-6 flex flex-col items-center gap-4 lg:gap-6 overflow-hidden rounded-2xl shadow-md bg-light-50 dark:bg-dark-100 sm:dark:bg-dark-50 transition-colors ${className}`}
		>
			<div className='absolute top-0 right-0 px-3.5 py-0.5 rounded-bl-2xl bg-accent'>
				<p className='font-medium text-light-primary'>${price}</p>
			</div>
			<img
				className='w-32 lg:w-36 mx-6 aspect-[4/3] object-contain'
				src={image}
				alt={name}
			/>
			<h3 className='whitespace-nowrap font-primary font-semibold text-2xl text-dark-primary dark:text-light-primary transition-colors'>
				{name}
			</h3>
			<Button className='w-full min-w-[12.375rem] px-5 py-2' onClick={onClick}>
				Details
			</Button>
		</div>
	);
};

export default Product;
