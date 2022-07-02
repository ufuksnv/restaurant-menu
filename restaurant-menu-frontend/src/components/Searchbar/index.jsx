import { useRef } from 'react';
import { TbSearch } from 'react-icons/tb';

const Searchbar = () => {
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		inputRef.current.value = '';
	};

	const handleChange = () => {
		console.log(inputRef.current.value);
	};

	return (
		<form
			className='h-12 flex items-stretch rounded-lg bg-white shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] overflow-hidden'
			onSubmit={handleSubmit}
		>
			<button
				className='pr-2 pl-4 grid place-items-center outline-none'
				type='submit'
			>
				<TbSearch className='text-xl' />
			</button>
			<input
				className='pr-2 pl-2 font-semibold text-[#353535] placeholder:text-[#353535] outline-none'
				type='text'
				placeholder='Search'
				ref={inputRef}
				onChange={handleChange}
			/>
		</form>
	);
};

export default Searchbar;
