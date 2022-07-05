import { useState, useRef } from 'react';
import { TbSearch } from 'react-icons/tb';

const Searchbar = ({ className = '' }) => {
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
    inputRef.current.value = '';
		console.log(inputValue);
	};

	const handleChange = () => {
		const search = inputRef.current.value.trim();
		setInputValue(search);
	};

	const styles = `flex flex-row-reverse h-12 items-stretch rounded-lg bg-white shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] overflow-hidden`;
	const classes = `${styles} ${className}`.trim();

	return (
		<form className={classes} onSubmit={handleSubmit}>
			<input
				className='flex-1 pr-2 pl-2 font-semibold text-[#fa6235] placeholder:text-[#353535] outline-none'
				type='search'
				placeholder='Search'
				ref={inputRef}
				onChange={handleChange}
			/>
			<button
				className={`pr-2 pl-4 grid place-items-center outline-none hover:text-[#fa6235] focus-visible:text-[#fa6235] ${
					inputValue.length > 0 ? 'text-[#fa6235]' : ''
				}`}
				type='submit'
			>
				<TbSearch className='text-xl' />
			</button>
		</form>
	);
};

export default Searchbar;
