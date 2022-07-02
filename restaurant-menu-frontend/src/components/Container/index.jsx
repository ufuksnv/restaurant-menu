const Container = ({ className = '', children }) => {
	const classes = `container mx-auto px-5 ${className}`.trim();
	return <div className={classes}>{children}</div>;
};

export default Container;
