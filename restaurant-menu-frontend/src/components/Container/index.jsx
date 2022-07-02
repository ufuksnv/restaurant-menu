const Container = ({ className = '', element, children, ...props }) => {
	const Element = element ?? 'div';
	const classes = `container mx-auto px-6 ${className}`.trim();

	return (
		<Element className={classes} {...props}>
			{children}
		</Element>
	);
};

export default Container;
