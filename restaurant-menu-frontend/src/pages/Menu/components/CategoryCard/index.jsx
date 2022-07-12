const CategoryCard = ({ title, image, className = '', onClick }) => {
	return (
		<button type='button' onClick={onClick}>
			<div
				className={`pointer-events-none relative max-w-[9rem] lg:max-w-[10rem] p-4 flex flex-col items-center gap-4 overflow-hidden rounded-2xl shadow-md bg-light-50 dark:bg-dark-100 sm:dark:bg-dark-50 transition-colors ${className}`}
			>
				<img
					className='w-full lg:w-36 aspect-[4/3] object-contain'
					src={image}
					alt={title}
				/>
				<h3 className=' whitespace-nowrap font-semibold text-xl text-dark-primary dark:text-light-primary transition-colors'>
					{title}
				</h3>
			</div>
		</button>
	);
};

export default CategoryCard;
