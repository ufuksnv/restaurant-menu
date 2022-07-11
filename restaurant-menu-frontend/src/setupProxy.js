const { createProxyMiddleware } = require('http-proxy-middleware');

const context = ['/weatherforecast', '/api'];

module.exports = function (app) {
	const appProxy = createProxyMiddleware(context, {
		target: 'https://localhost:7176',
		secure: false,
	});

	app.use(appProxy);
};
