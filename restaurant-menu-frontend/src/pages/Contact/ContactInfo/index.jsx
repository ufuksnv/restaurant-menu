import {
	FaAddressBook,
	FaPhone,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io';

import IconLink from '../../../components/IconLink';

const ContactInfo = ({ info }) => {
	return (
		<div className='p-8 lg:p-12 rounded-3xl lg:rounded-br-none text-light-primary bg-[linear-gradient(to_right_top,#fa6235,#f5672b,#f06c21,#eb7014,#e57500)]'>
			<div className='w-fit h-full mx-auto flex flex-col justify-between gap-9 sm:gap-12'>
				<h2 className='font-bold text-[2rem] sm:text-4xl text-light-primary'>
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
		</div>
	);
};

export default ContactInfo;
