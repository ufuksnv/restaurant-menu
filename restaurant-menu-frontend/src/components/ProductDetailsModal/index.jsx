import { Fragment, useState, useRef, useEffect } from 'react';
import { TbMilk } from 'react-icons/tb';
import { GiWheat, GiCoconuts } from 'react-icons/gi';

import Backdrop from '../Backdrop';
import Button from '../Button';
import Modal from '../Modal';

const HOW_MANY_LINES_TO_SHOW = 3;

const DetailsModal = ({ product, onClose }) => {
	const initialState = {
		isRestricted: true,
		lineNumber: null,
		lineHeight: null,
		maxHeight: null,
	};
	const [details, setDetails] = useState(initialState);
	const detailsRef = useRef(null);

	useEffect(() => {
		const detailsStyles = getComputedStyle(detailsRef.current);
		const detailsLineHeight = parseFloat(
			detailsStyles.getPropertyValue('line-height')
		);
		const detailsLineNumber =
			detailsRef.current.offsetHeight / detailsLineHeight;
		const detailsRestrictedHeight = detailsLineHeight * HOW_MANY_LINES_TO_SHOW;

		setDetails((prev) => ({
			...prev,
			lineNumber: detailsLineNumber,
			lineHeight: detailsLineHeight,
			maxHeight: detailsRestrictedHeight,
		}));
	}, []);

	const toggleReadMore = () => {
		setDetails((prev) => ({ ...prev, isRestricted: !prev.isRestricted }));
	};

	const hasAllergen = [
		product.allergens.milk,
		product.allergens.wheat,
		product.allergens.hazelnut,
	].some((allergen) => allergen);

	return (
		<Fragment>
			<Backdrop onClick={onClose} />
			<Modal>
				<div className='max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] p-6 flex flex-col gap-6 pointer-events-auto rounded-lg bg-light-50 dark:bg-dark-50'>
					<div className='flex items-center gap-6'>
						<img
							className='w-16 aspect-square object-scale-down'
							src={product.image}
							alt={product.name}
						/>
						<div className='flex flex-col'>
							<h2 className='font-bold text-xl sm:text-2xl'>{product.name}</h2>
							<span className='font-medium text-dark-primary dark:text-light-secondary'>
								{'$' + product.price}
							</span>
						</div>
					</div>
					{hasAllergen && (
						<div className='flex flex-col gap-2'>
							<h3 className='font-medium text-lg sm:text-xl text-dark-primary dark:text-light-primary'>
								Allergens
							</h3>
							<ul className='flex gap-2 items-center text-xs sm:text-sm text-light-primary'>
								{product.allergens.milk && (
									<li className='px-2 sm:px-2.5 py-1 flex gap-1 items-center bg-accent rounded-full'>
										<TbMilk />
										<span>Milk</span>
									</li>
								)}
								{product.allergens.wheat && (
									<li className='px-2 sm:px-2.5 py-1 flex gap-1 items-center bg-accent rounded-full'>
										<GiWheat />
										<span>Wheat</span>
									</li>
								)}
								{product.allergens.hazelnut && (
									<li className='px-2 sm:px-2.5 py-1 flex gap-1 items-center bg-accent rounded-full'>
										<GiCoconuts />
										<span>Hazelnut</span>
									</li>
								)}
							</ul>
						</div>
					)}
					<div className='flex flex-col gap-1 overflow-y-auto'>
						<h3 className='font-medium text-lg sm:text-xl text-dark-primary dark:text-light-primary'>
							Details
						</h3>
						<p
							style={
								details.isRestricted
									? {
											maxHeight: details.maxHeight + 'px',
											overflowY: 'hidden',
									  }
									: null
							}
							className='max-w-sm text-dark-secondary dark:text-light-secondary'
							ref={detailsRef}
						>
							{product.details}
						</p>
						{HOW_MANY_LINES_TO_SHOW < details.lineNumber && (
							<button
								type='button'
								className='w-fit font-medium dark:font-normal text-dark-primary dark:text-light-primary'
								onClick={toggleReadMore}
							>
								{details.isRestricted ? 'Read More' : 'Read Less'}
							</button>
						)}
					</div>
					<Button
						className='w-fit py-2 mt-2 ml-auto text-base'
						onClick={onClose}
					>
						CLOSE
					</Button>
				</div>
			</Modal>
		</Fragment>
	);
};

export default DetailsModal;
