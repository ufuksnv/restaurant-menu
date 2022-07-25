import { IoIosSend } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../../components/Button';

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const schema = yup.object().shape({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup
		.string()
		.required('Email address is required')
		.email('Email address is not valid'),
	phone: yup
		.string()
		.required('Phone number is required')
		.matches(phoneRegExp, 'Phone number is not valid'),
	customerMessage: yup.string().required('Message is required'),
});

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data, e) => {
		fetch('/api/message/insertmessage', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		e.target.reset();
	};

	return (
		<div className='flex-1 pt-16 lg:p-12 rounded-r-3xl text-dark-primary dark:text-light-primary bg-light-50 dark:bg-dark-50 transition-colors'>
			<form
				className='grid grid-cols-2 gap-x-6 gap-y-4'
				onSubmit={handleSubmit(onSubmit)}
			>
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
						{...register('firstName')}
					/>
					{errors.firstName && (
						<p className='text-red-500'>{errors.firstName.message}</p>
					)}
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
						{...register('lastName')}
					/>
					{errors.lastName && (
						<p className='text-red-500'>{errors.lastName.message}</p>
					)}
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
						{...register('email')}
					/>
					{errors.email && (
						<p className='text-red-500'>{errors.email.message}</p>
					)}
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
						{...register('phone')}
					/>
					{errors.phone && (
						<p className='text-red-500'>{errors.phone.message}</p>
					)}
				</div>
				<div className='col-span-2'>
					<label
						htmlFor='customerMessage'
						className='font-medium text-dark-primary dark:text-light-primary transition-colors'
					>
						Message
					</label>
					<textarea
						id='customerMessage'
						rows='4'
						cols='50'
						className='w-full p-2 resize-none rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
						{...register('customerMessage')}
					></textarea>
					{errors.customerMessage && (
						<p className='text-red-500'>{errors.customerMessage.message}</p>
					)}
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
