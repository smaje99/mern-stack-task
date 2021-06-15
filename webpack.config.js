const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, '/src/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}