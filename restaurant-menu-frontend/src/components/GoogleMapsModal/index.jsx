import { Fragment, useEffect, useRef } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import Backdrop from '../Backdrop';
import Modal from '../Modal';

const GoogleMapsModal = ({ onClose }) => {
	const closeButtonRef = useRef(null);

	useEffect(() => {
		closeButtonRef.current?.focus();
	}, [closeButtonRef]);

	return (
		<Fragment>
			<Backdrop onClick={onClose} />
			<Modal>
				<div className='relative max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] p-1 flex flex-col gap-6 pointer-events-auto rounded-lg bg-white'>
					<iframe
						className='max-w-full w-[40rem] aspect-[4/3] border-none shadow-inner rounded-md'
						title='google-maps'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.20789823862!2d32.62268193626751!3d39.903555664074624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1sen!2str!4v1659029409052!5m2!1sen!2str'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
					<button
						type='button'
						className='absolute -top-2.5 -right-2.5 rounded-full overflow-hidden text-white isolate before:absolute before:inset-1 before:-z-10 before:rounded-full before:bg-dark-50'
						onClick={onClose}
						ref={closeButtonRef}
					>
						<IoCloseCircleSharp size='1.5rem' />
					</button>
				</div>
			</Modal>
		</Fragment>
	);
};

export default GoogleMapsModal;
