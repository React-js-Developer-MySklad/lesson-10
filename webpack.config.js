const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");


module.exports = {
    entry: './main.tsx',
    //mode: 'production',

    context: resolve(__dirname, 'src'),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            'src': resolve(__dirname, 'src')
        }
    },

    output: {
        path: resolve(__dirname, 'build'),
        filename: "[name].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: resolve(__dirname, 'tsconfig.json'),
            },
        })
    ]
}