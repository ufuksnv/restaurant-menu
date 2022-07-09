import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Container from './../../../components/Container/index';
import Product from './../../../components/Product';

const DUMMY_PRODUCTS = [
	{
		name: 'Burger',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/c0cb8dee3770a41a13f45a78f197a802/L0KzQYm3UsAzN5tBiZH0aYP2gLBuTfhidZN6itlucj3ncbr5mb1yfZZqhp9saHXog7bplgJobaMye9pyY3vofn76gf5lf5poRdpuYXz3eMq0gwVzb5Z3ReJ3Zz24cYi7WcE3bZZnTaYEMD66RIO5U8gxPWI6SakAOEi7RIeCVsM6NqFzf3==/kisspng-hamburger-dairy-queen-cheeseburger-chicken-sandwic-healthy-burger-png-5a74916eeb5490.7422380515175888469639.png',
	},
	{
		name: 'Pizza',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/b246313f464d6f63dc5da3c1e314a80d/L0KzQYm3UsE0N6h0iZH0aYP2gLBuTgBqgqtmRdpAdD3zf8T7hgIubJD6f9o2ZnB4gn73igp7aV46eao7ZnW0SYi9Usk0OV8ATqoDNkW8RYK8Ucg2O2U2Tqs9OESxgLBu/kisspng-pizza-hut-poster-dough-four-pizza-5a82fe19762931.968865951518534169484.png',
	},
	{
		name: 'Sushi',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/d133e71515bf080ee7ac565aa9ab0d21/L0KzQYm3UsAzN5Z0iZH0aYP2gLBuTgN2e5luRdxqcHHxdcTsTfN2caRuhtc2c3H2eLr0ib1uaZxukud8aHmwccTwgf4ua6ZuReVAc3jsPcH1h71pbF46eak9Y3K8cYiBWMZkOl89TKIEMUC8QoK8Ucc3OGQ8S6o9OUO6PsH1h5==/kisspng-sushi-japanese-cuisine-sashimi-makizushi-asian-cui-sushi-png-hd-5a74cb9a7886c2.8409109215176037384937.png',
	},
	{
		name: 'İskender',
		price: '5.25',
		image:
			'https://png2.cleanpng.com/sh/7bd9285790907ab3ae7f4b09bfe79a85/L0KzQYm3VcI3N6d3g5H0aYP2gLBuTfRwdpZ3Rd1uYnHlPcTyhf5lbaMyg9drYYCwhLL1hP9wepoye9pyY3vofn7yjBZ1aV46eqJqMkG8Rom3UsliPF83TqYEM0m7QIK8Usc0QWE7SaYAMkWxgLBu/kisspng-doner-kebab-skender-kebap-tandoori-chicken-kofta-5b0a21968029a4.264939801527390614525.png',
	},
];

const BestSellerSection = () => {
	return (
		<Container
			element='section'
			id='best-seller'
			className='py-10 sm:py-12 flex gap-16'
		>
			<div className='w-full sm:px-6 sm:py-8 md:py-12 lg:py-20 grid grid-cols-2 justify-items-center rounded-2xl gap-8 md:gap-12 lg:gap-[5rem] sm:bg-light-100 sm:dark:bg-dark-100 transition-colors'>
				<h2 className='place-self-center md:place-self-start col-span-2 md:col-span-1 md:ml-8 2xl:ml-20 whitespace-nowrap font-bold text-3xl sm:text-4xl lg:text-5xl text-dark-primary dark:text-light-primary transition-colors'>
					Best Selling
				</h2>
				<Link
					to='/menu'
					className='place-self-center row-start-3 md:row-auto col-span-2 md:col-span-1 md:ml-auto md:mr-8 2xl:mr-20 flex items-center gap-2 font-medium text-lg text-dark-primary dark:text-light-primary hover:text-accent dark:hover:text-accent transition-colors'
				>
					View All
					<AiOutlineArrowRight />
				</Link>
				<div className='col-span-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{DUMMY_PRODUCTS.map(({ name, price, image }, i) => (
						<Product key={i} name={name} price={price} image={image} />
					))}
				</div>
			</div>
		</Container>
	);
};

export default BestSellerSection;
