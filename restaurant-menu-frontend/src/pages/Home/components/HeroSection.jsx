import Container from '../../../components/Container/index';
import Button from '../../../components/Button/index';
import breakfast from '../../../assets/svg/breakfast.svg';

const HeroSection = () => {
	return (
		<Container
			element='section'
			id='hero'
			className='py-12 flex gap-15 2xl:gap-16'
		>
			<div className='flex-1 flex flex-col items-center xl:items-start gap-6 2xl:gap-8'>
				<h1 className='font-primary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center xl:text-left text-dark-primary dark:text-light-primary transition-colors'>
					Best & Fastest <span className='text-accent'>Delivery</span> in Your
					Place
				</h1>
				<p className='font-medium sm:text-lg text-center xl:text-left text-dark-secondary dark:text-light-secondary transition-colors'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit
					voluptatem numquam minima quia necessitatibus eveniet autem.
				</p>
				<Button className='w-fit'>Browse Menu</Button>
			</div>
			<div className='hidden xl:grid place-items-center flex-1 '>
				<img src={breakfast} alt='breakfast illustration' />
			</div>
		</Container>
	);
};

export default HeroSection;
