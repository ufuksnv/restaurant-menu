const Button = ({ type = 'button', className = '', children, ...props }) => {
	const styles = `inline-block font-semibold text-white text-lg text-center px-6 py-3 bg-[#fa6235] rounded-xl`;
	const classes = `${styles} ${className}`.trim();

	return (
		<button type={type} className={classes} {...props}>
			{children}
		</button>
	);
};

export default Button;
