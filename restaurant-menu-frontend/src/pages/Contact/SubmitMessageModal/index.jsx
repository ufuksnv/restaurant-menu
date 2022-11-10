import { Fragment } from 'react';
import { CgCheckO, CgCloseO } from 'react-icons/cg';

import Button from '../../../components/Button';
import Backdrop from './../../../components/Backdrop';
import Modal from './../../../components/Modal';

const SubmitMessageModal = ({ isFailed, message, onClose }) => {
	return (
		<Fragment>
			<Backdrop onClick={onClose} />
			<Modal>
				<div className='max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] w-96 sm:w-auto pointer-events-auto rounded-3xl bg-light-50 dark:bg-dark-50'>
					<div
						className={`w-full aspect-[21/9] rounded-t-3xl grid place-items-center text-white ${
							isFailed ? 'bg-red-500' : 'bg-green-500'
						}`}
					>
						{isFailed ? <CgCloseO size={48} /> : <CgCheckO size={48} />}
					</div>
					<div className='p-6 flex flex-col'>
						<h3 className='my-2 font-bold text-center text-3xl'>
							{isFailed ? 'Error!' : 'Awesome!'}
						</h3>
						<p className='sm:px-8 mb-8 font-medium text-center text-dark-secondary sm:text-lg'>
							{message}
						</p>
						<Button
							className={`py-2.5 rounded-2xl ${
								isFailed ? 'bg-red-500' : 'bg-green-500'
							}`}
							onClick={onClose}
						>
							{isFailed ? 'Try Again' : 'Continue'}
						</Button>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
};

export default SubmitMessageModal;
