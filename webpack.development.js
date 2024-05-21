const { merge} = require('webpack-merge');
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            }
        ]
    }
})