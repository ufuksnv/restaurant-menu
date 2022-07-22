import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
	return createPortal(
		<div className='fixed inset-0 z-50 grid place-items-center pointer-events-none'>
			{children}
		</div>,
		document.getElementById('root')
	);
};

export default Modal;
