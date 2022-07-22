import { createPortal } from 'react-dom';

const Backdrop = ({ className, onClick }) => {
	return createPortal(
		<div
			className={`fixed inset-0 z-40 bg-black bg-opacity-70 ${className}`}
			onClick={onClick}
		/>,
		document.getElementById('root')
	);
};

export default Backdrop;
