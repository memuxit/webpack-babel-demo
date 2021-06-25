const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const libraryName = 'digital-gate-v2';
const outputFile = `${libraryName}.min.js`;

module.exports = {
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
    ],
    experiments: {
        topLevelAwait: true,
    },
    target: ['web', 'es5'],
    mode: "development",
};
