import Container from '../../components/Container';
import Button from '../../components/Button';
import breakfast from '../../assets/svg/breakfast.svg';

const Home = () => {
	return (
		<Container element='section' id='hero' className='py-10 flex gap-16'>
			<div className='flex-1 flex flex-col gap-8'>
				<h1 className='font-bold text-7xl'>
					Best & Fastest <span className='text-[#fa6235]'>Delivery</span> in
					Your Place
				</h1>
				<p className='font-medium text-lg text-[#353535]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit
					voluptatem numquam minima quia necessitatibus eveniet autem, illo
					adipisci et.
				</p>
				<Button className='w-fit'>Browse Menu</Button>
			</div>
			<div className='flex-1'>
				<img src={breakfast} alt='breakfast illustration' />
			</div>
		</Container>
	);
};

export default Home;
