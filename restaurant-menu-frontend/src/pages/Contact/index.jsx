import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/exports';

import Container from './../../components/Container';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

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
				<div className='max-w-[64rem] mx-auto mt-6 lg:mb-6 flex flex-col lg:flex-row rounded-3xl lg:shadow-xl bg-light-50 dark:bg-dark-50 transition-colors'>
					<ContactInfo info={info} />
					<ContactForm />
				</div>
			</Container>
		</Fragment>
	);
};

export default Contact;
