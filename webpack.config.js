const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        'whatwg-fetch',
        './src/app.js'
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
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
    optimization: {
        splitChunks: {chunks: "all"}
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
