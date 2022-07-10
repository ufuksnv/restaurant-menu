import useColorMode from '../../hooks/use-color-mode';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { CgScreen } from 'react-icons/cg';

const ColorModeGroup = ({ className = '' }) => {
	const { colorMode, setColorMode } = useColorMode();

	const handleSetColorMode = (mode) => () => setColorMode(mode);

	return (
		<div
			className={`flex rounded-lg shadow-md bg-light-50 dark:bg-dark-100 transition-colors ${className}`}
		>
			<button
				className={`p-3 flex items-center gap-2 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 transition-colors rounded-l-lg ${
					colorMode === 'light'
						? 'text-dark-primary dark:text-light-primary'
						: 'text-dark-disabled dark:text-light-disabled hover:text-dark-secondary hover:dark:text-light-secondary focus-visible:text-dark-secondary focus-visible:dark:text-light-secondary'
				}`}
				onClick={handleSetColorMode('light')}
			>
				<MdLightMode />
				Light
			</button>
			<button
				className={`p-3 flex items-center gap-2 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 transition-colors ${
					colorMode === 'dark'
						? 'text-dark-primary dark:text-light-primary'
						: 'text-dark-disabled dark:text-light-disabled hover:text-dark-secondary hover:dark:text-light-secondary focus-visible:text-dark-secondary focus-visible:dark:text-light-secondary'
				}`}
				onClick={handleSetColorMode('dark')}
			>
				<MdDarkMode />
				Dark
			</button>
			<button
				className={`p-3 flex items-center gap-2 font-medium text-lg text-left hover:bg-light-200 hover:dark:bg-dark-200 transition-colors rounded-r-lg ${
					colorMode === 'system'
						? 'text-dark-primary dark:text-light-primary'
						: 'text-dark-disabled dark:text-light-disabled hover:text-dark-secondary hover:dark:text-light-secondary focus-visible:text-dark-secondary focus-visible:dark:text-light-secondary'
				}`}
				onClick={handleSetColorMode('system')}
			>
				<CgScreen />
				System
			</button>
		</div>
	);
};

export default ColorModeGroup;
