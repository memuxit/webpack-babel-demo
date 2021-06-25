const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const libraryName = 'babel-demo';
const outputFile = `${libraryName}.min.js`;

module.exports = env => ({
    entry: [
        'whatwg-fetch',
        './src/app.js'
    ],
    output: {
        library: libraryName,
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: outputFile,
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
        }),
        new Dotenv({
            path: `./src/environments/.env.${env.target}`
        }),
    ],
    experiments: {
        topLevelAwait: true,
    },
    target: ['web', 'es5'],
    mode: "development",
});
