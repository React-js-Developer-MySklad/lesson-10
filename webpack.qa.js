const { merge} = require('webpack-merge');
const commonConfig = require('./webpack.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfig, {
    mode: "production",
    // смотрим в Devtools -> Sources влкадка
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // используется для извлечения css стилей
                    MiniCssExtractPlugin.loader,
                    // используется для подгрузки css стилей в коде
                    'css-loader'
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                    // используется для извлечения css стилей
                    MiniCssExtractPlugin.loader,
                    // используется для подгрузки css стилей в коде
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[name]_[local]-[hash:base64:5]',
                            },
                            esModule: false
                        }
                    },
                    'postcss-loader'
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ]
})