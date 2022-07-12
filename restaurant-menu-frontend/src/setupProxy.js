const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	const appProxy = createProxyMiddleware('/api', {
		target: 'https://localhost:7176',
		secure: false,
	});

	app.use(appProxy);
};
