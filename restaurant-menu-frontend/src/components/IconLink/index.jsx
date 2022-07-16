import React from 'react';

import styles from './styles.module.css';

const IconLink = ({ href, alt, color, className = '', icon }) => {
	return (
		<a
			href={href}
			rel='noopener noreferrer'
			target='_blank'
			alt={alt}
			style={{ '--background': color }}
			className={`relative h-10 aspect-square grid place-items-center rounded-lg overflow-hidden text-dark-primary dark:text-light-primary hover:text-light-primary bg-light-50 dark:bg-dark-200 transition-colors before:absolute before:inset-0 before:opacity-0 before:hover:opacity-100 before:transition-opacity ${styles.iconLink} ${className}`}
		>
			{icon}
		</a>
	);
};

export default IconLink;
