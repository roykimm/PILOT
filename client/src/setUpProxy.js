const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use('/api/greeting', 
        createProxyMiddleware({
        target: 'http://localhost:6000',
        changeOrigin: true,
        })
    )
}
