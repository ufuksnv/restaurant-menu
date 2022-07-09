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

	return (
		<form
			className={`flex flex-row-reverse h-12 items-stretch rounded-lg shadow-md overflow-hidden bg-light-50 dark:bg-dark-100 transition-colors ${className}`.trim()}
			onSubmit={handleSubmit}
		>
			<input
				className='flex-1 pr-2 pl-2 font-semibold outline-none bg-transparent text-accent placeholder:text-dark-disabled dark:placeholder:text-light-disabled transition-colors'
				type='search'
				placeholder='Search'
				ref={inputRef}
				onChange={handleChange}
			/>
			<button
				className={`pr-2 pl-4 grid place-items-center outline-none hover:text-accent dark:hover:text-accent focus-visible:text-accent transition-colors ${
					inputValue.length > 0
						? 'text-accent'
						: 'text-dark-primary dark:text-light-primary'
				}`}
				type='submit'
			>
				<TbSearch className='text-xl' />
			</button>
		</form>
	);
};

export default Searchbar;
