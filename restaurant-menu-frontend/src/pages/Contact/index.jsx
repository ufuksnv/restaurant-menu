import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/exports';
import {
	FaAddressBook,
	FaPhone,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoLogoWhatsapp, IoIosSend } from 'react-icons/io';

import Container from './../../components/Container';
import Button from './../../components/Button';
import IconLink from './../../components/IconLink';

const Contact = () => {
	const info = useSelector((state) => state.info);
	return (
		<Fragment>
			<Container element='section' id='contact' className='py-12'>
				<h1 className='w-full mb-8 inline-block font-primary font-bold text-center text-5xl text-dark-primary dark:text-light-primary transition-colors'>
					Contact Us
				</h1>
				<p className='w-full mb-12 inline-block font-medium text-center text-lg text-dark-secondary dark:text-light-secondary transition-colors'>
					Any question or remarks? Just write us a message!
				</p>
				<div className='w-[64rem] mx-auto my-6 place-self-end flex rounded-3xl shadow-xl bg-light-50 dark:bg-dark-50 transition-colors'>
					<div className='p-12 flex flex-col justify-between gap-12 rounded-t-3xl rounded-bl-3xl text-light-primary bg-[linear-gradient(to_right_top,#fa6235,#f5672b,#f06c21,#eb7014,#e57500)]'>
						<h2 className='font-bold text-4xl text-light-primary'>
							Contact Info
						</h2>
						<ul className='flex flex-col gap-6'>
							<li className='flex items-center gap-4'>
								<FaAddressBook size={20} />
								<p>{info.address}</p>
							</li>
							<li className='flex items-center gap-4'>
								<IoMail size={20} />
								<a href={`mailto:${info.email}`} className='hover:underline'>
									{info.email}
								</a>
							</li>
							<li className='flex items-center gap-4'>
								<FaPhone size={20} />
								<a href={`tel:${info.phone}`} className='hover:underline'>
									{info.phone}
								</a>
							</li>
							<li className='flex items-center gap-4'>
								<IoLogoWhatsapp size={20} />
								<a href='https://wa.me/1XXXXXXXXXX' className='hover:underline'>
									{info.whatsapp}
								</a>
							</li>
						</ul>
						<ul className='flex justify-between gap-6'>
							<li className='hover:scale-125 rounded-full'>
								<IconLink
									href={info.facebook}
									alt='facebook'
									color='transparent'
									icon={<FaFacebookF size={20} className='z-10' />}
									className='text-light-primary bg-transparent dark:bg-transparent'
								/>
							</li>
							<li className='hover:scale-125 rounded-full'>
								<IconLink
									href={info.twitter}
									alt='twitter'
									color='transparent'
									icon={<FaTwitter size={20} className='z-10' />}
									className='text-light-primary bg-transparent dark:bg-transparent'
								/>
							</li>
							<li className='hover:scale-125 rounded-full'>
								<IconLink
									href={info.instagram}
									alt='instagram'
									color='transparent'
									icon={<FaInstagram size={20} className='z-10' />}
									className='text-light-primary bg-transparent dark:bg-transparent'
								/>
							</li>
						</ul>
					</div>
					<div className='flex-1 p-12 rounded-r-3xl text-dark-primary dark:text-light-primary bg-light-50 dark:bg-dark-50 transition-colors'>
						<form className='grid grid-cols-2 gap-x-6 gap-y-4'>
							<div>
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
								/>
							</div>
							<div>
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
								/>
							</div>
							<div>
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
								/>
							</div>
							<div>
								<label
									htmlFor='phone'
									className='font-medium text-dark-primary dark:text-light-primary transition-colors'
								>
									Phone
								</label>
								<input
									id='phone'
									type='tel'
									pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
									className='w-full p-2 rounded-lg border-2 dark:border-[#495D6A] dark:bg-dark-50 transition-colors'
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
								></textarea>
							</div>
							<Button className='col-start-2 flex flex-row-reverse items-center justify-center gap-3'>
								Send Message
								<IoIosSend size={24} />
							</Button>
						</form>
					</div>
				</div>
			</Container>
		</Fragment>
	);
};

export default Contact;
