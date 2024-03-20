const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', 
    externals: [nodeExternals()], 
    entry: path.resolve(__dirname, '../src/index.js'), // Adjust the entry path as needed
    output: {
        path: path.resolve(__dirname, 'dist'), // Adjust the output path as needed
        filename: 'bundle.js', 
    },
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util"),
            "path": require.resolve("path-browserify"),
            "url": require.resolve("url")
        }
    },
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
            },
        ],
    },
};