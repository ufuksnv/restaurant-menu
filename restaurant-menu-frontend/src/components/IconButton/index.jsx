import React from 'react';

const IconButton = ({
	isHidden = false,
	className = '',
	type = 'button',
	icon: Icon,
	...props
}) => {
	const classes =
		`h-9 grid place-items-center aspect-square ${className}`.trim();

	if (isHidden) return;

	return (
		<button className={classes} type={type} {...props}>
			<Icon />
		</button>
	);
};

export default IconButton;
