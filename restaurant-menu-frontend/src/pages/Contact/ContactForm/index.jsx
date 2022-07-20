import { IoIosSend } from 'react-icons/io';

import Button from '../../../components/Button';

const ContactForm = () => {
	return (
		<div className='flex-1 pt-16 lg:p-12 rounded-r-3xl text-dark-primary dark:text-light-primary bg-light-50 dark:bg-dark-50 transition-colors'>
			<form className='grid grid-cols-2 gap-x-6 gap-y-4'>
				<div className='col-span-2 sm:col-span-1'>
					<label
						htmlFor='firstName'
						className='font-medium text-dark-primary dark:text-light-primary transition-colors'
					>
						First Name
					</label>
					<input
						id='firstName'
						type='text'
						className='w-full p-2 rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
						required
					/>
				</div>
				<div className='col-span-2 sm:col-span-1'>
					<label
						htmlFor='lastName'
						className='font-medium text-dark-primary dark:text-light-primary transition-colors'
					>
						Last Name
					</label>
					<input
						id='lastName'
						type='text'
						className='w-full p-2 rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
						required
					/>
				</div>
				<div className='col-span-2 sm:col-span-1'>
					<label
						htmlFor='email'
						className='font-medium text-dark-primary dark:text-light-primary transition-colors'
					>
						Email
					</label>
					<input
						id='email'
						type='email'
						className='w-full p-2 rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
						required
					/>
				</div>
				<div className='col-span-2 sm:col-span-1'>
					<label
						htmlFor='phone'
						className='font-medium text-dark-primary dark:text-light-primary transition-colors'
					>
						Phone
					</label>
					<input
						id='phone'
						type='tel'
						className='w-full p-2 rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
						required
					/>
				</div>
				<div className='col-span-2'>
					<label
						htmlFor='message'
						className='font-medium text-dark-primary dark:text-light-primary transition-colors'
					>
						Message
					</label>
					<textarea
						id='message'
						rows='4'
						cols='50'
						className='w-full p-2 resize-none rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
						required
					></textarea>
				</div>
				<Button
					type='submit'
					className='col-span-2 sm:col-span-1 sm:col-start-2 flex flex-row-reverse items-center justify-center gap-3'
				>
					Send Message
					<IoIosSend size={24} />
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
