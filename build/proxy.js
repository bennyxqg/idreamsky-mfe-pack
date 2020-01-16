module.exports = {
    port: 9000,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    proxy: {
        // "/app1": {
        //     target: "http://localhost:9001",
        //     pathRewrite: {"^/app1" : ""}
        // },
        
    },
    clientLogLevel: "error"
};