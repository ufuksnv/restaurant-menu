import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
	return (
		<Link
			to='/'
			className={`mt-1.5 overflow-hidden font-primary font-bold text-4xl ${className}`}
		>
			Restauránt
		</Link>
	);
};

export default Logo;
