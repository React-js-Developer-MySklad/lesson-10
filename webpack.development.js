const { merge} = require('webpack-merge');
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader' ],
                exclude: /\.module\.css$/i
            },

            {
                test: /\.module\.css$/i,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            esModule: false
                        }
                    }
                ]
            }
        ]
    }
})