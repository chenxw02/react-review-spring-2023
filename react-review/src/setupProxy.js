const { createProxyMiddleware } = require('http-proxy-middleware');


// 配置反向代理

module.exports = function(app) {
    app.use(
        // 以/ajax开头
        '/ajax',
        createProxyMiddleware({
            // 目标服务器
            target: 'https://i.maoyan.com',
            changeOrigin: true
        })
    );
};

module.exports = function(app) {
    app.use(
        '/douyin_video_data',
        createProxyMiddleware({
            target: 'https://api.douyin.wtf',
            changeOrigin: true
        })
    );
};