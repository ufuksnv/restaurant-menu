import { useState, useRef } from 'react';
import { TbSearch } from 'react-icons/tb';

const Searchbar = ({ className = '' }) => {
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
    inputRef.current.value = '';
		console.log(inputValue);
    setInputValue('');
	};

	const handleChange = () => {
		const search = inputRef.current.value.trim();
		setInputValue(search);
	};

	const styles = `flex flex-row-reverse h-12 items-stretch rounded-lg bg-light-50 dark:bg-dark-100 shadow-md overflow-hidden`;
	const classes = `${styles} ${className}`.trim();

	return (
		<form className={classes} onSubmit={handleSubmit}>
			<input
				className='flex-1 pr-2 pl-2 font-semibold bg-transparent transition-colors text-accent placeholder:text-dark-disabled dark:placeholder:text-light-disabled outline-none'
				type='search'
				placeholder='Search'
				ref={inputRef}
				onChange={handleChange}
			/>
			<button
				className={`pr-2 pl-4 grid place-items-center outline-none transition-colors hover:text-accent dark:hover:text-accent focus-visible:text-accent ${
					inputValue.length > 0 ? 'text-accent' : 'text-dark-primary dark:text-light-primary'
				}`}
				type='submit'
			>
				<TbSearch className='text-xl' />
			</button>
		</form>
	);
};

export default Searchbar;
