import { useRef } from 'react';
import { TbSearch } from 'react-icons/tb';

const Searchbar = ({ isMenu = false, className = '' }) => {
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
    const search = inputRef.current.value.trim();
		inputRef.current.value = '';
    if (search === '') return; 

		console.log(search);
	};

	const handleChange = () => {
    const search = inputRef.current.value.trim();
    if (search === '') return; 

		console.log(search);
	};

  const styles = `h-12 items-stretch rounded-lg bg-white shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] overflow-hidden`;
  const classes = `${isMenu ? 'flex' : 'hidden lg:flex'} ${styles} ${className}`.trim();

	return (
		<form
			className={classes}
			onSubmit={handleSubmit}
		>
			<button
				className='pr-2 pl-4 grid place-items-center outline-none'
				type='submit'
			>
				<TbSearch className='text-xl' />
			</button>
			<input
				className='flex-1 pr-2 pl-2 font-semibold text-[#353535] placeholder:text-[#353535] outline-none'
				type='text'
				placeholder='Search'
				ref={inputRef}
				onChange={handleChange}
			/>
		</form>
	);
};

export default Searchbar;
