import Button from '../Button';

const Product = ({ name, price, image }) => {
	return (
		<div className='relative max-w-xs p-8 flex flex-col items-center gap-4 rounded-2xl bg-white shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] overflow-hidden'>
			<div className='absolute top-0 right-0 px-3 bg-[#fa6235] rounded-bl-2xl'>
				<p className='font-semibold text-white text-lg text-left'>${price}</p>
			</div>
			<img
				className='w-32 mx-6 aspect-[4/3] object-contain'
				src={image}
				alt={name}
			/>
			<h3 className='font-semibold text-2xl'>{name}</h3>
			<Button className='w-full px-5 py-2 text-base'>Order Now</Button>
		</div>
	);
};

export default Product;
