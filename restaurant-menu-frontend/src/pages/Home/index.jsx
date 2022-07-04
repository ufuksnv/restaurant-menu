import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import Button from '../../components/Button';
import breakfast from '../../assets/svg/breakfast.svg';
import Product from '../../components/Product';

const DUMMY_PRODUCTS = [
  { name: 'Burger', price: '5.25', image: 'https://png2.cleanpng.com/sh/c0cb8dee3770a41a13f45a78f197a802/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png' },
  { name: 'Pizza', price: '5.25', image: 'https://png2.cleanpng.com/sh/b246313f464d6f63dc5da3c1e314a80d/L0KzQYm3UsE0N6h0iZH0aYP2gLBuTgBqgqtmRdpAdD3zf8T7hgIubJD6f9o2ZnB4gn73igp7aV46eao7ZnW0SYi9Usk0OV8ATqoDNkW8RYK8Ucg2O2U2Tqs9OESxgLBu/kisspng-pizza-hut-poster-dough-four-pizza-5a82fe19762931.968865951518534169484.png' },
  { name: 'Sushi', price: '5.25', image: 'https://png2.cleanpng.com/sh/d133e71515bf080ee7ac565aa9ab0d21/L0KzQYm3UsAzN5Z0iZH0aYP2gLBuTgN2e5luRdxqcHHxdcTsTfN2caRuhtc2c3H2eLr0ib1uaZxukud8aHmwccTwgf4ua6ZuReVAc3jsPcH1h71pbF46eak9Y3K8cYiBWMZkOl89TKIEMUC8QoK8Ucc3OGQ8S6o9OUO6PsH1h5==/kisspng-sushi-japanese-cuisine-sashimi-makizushi-asian-cui-sushi-png-hd-5a74cb9a7886c2.8409109215176037384937.png' },
  { name: 'İskender', price: '5.25', image: 'https://png2.cleanpng.com/sh/7bd9285790907ab3ae7f4b09bfe79a85/L0KzQYm3VcI3N6d3g5H0aYP2gLBuTfRwdpZ3Rd1uYnHlPcTyhf5lbaMyg9drYYCwhLL1hP9wepoye9pyY3vofn7yjBZ1aV46eqJqMkG8Rom3UsliPF83TqYEM0m7QIK8Usc0QWE7SaYAMkWxgLBu/kisspng-doner-kebab-skender-kebap-tandoori-chicken-kofta-5b0a21968029a4.264939801527390614525.png' },
];

const Home = () => {
	return (
		<>
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
			<Container element='section' id='trending' className='py-10 flex gap-16'>
				<div className='w-full px-6 py-20 flex flex-col rounded-2xl bg-[#fafafa] gap-[5rem]'>
					<header className='px-20 flex justify-between items-center'>
						<h2 className='font-bold text-5xl'>Trending Recipes</h2>
						<Link to='/menu' className='font-medium text-lg text-[#fa6235]'>
							View All &gt;
						</Link>
					</header>
					<div className='flex flex-wrap justify-around gap-6 mx-28'>
						{DUMMY_PRODUCTS.map(({ name, price, image }, i) => <Product key={i} name={name} price={price} image={image} />)}
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
