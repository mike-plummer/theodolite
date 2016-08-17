var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
    entry: "./src/app/main.ts",
    devtool: 'source-map',
    resolve: {
      extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                exclude: [ /node_modules/, './src/app/views/index.html' ],
                loader: "html-loader"
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "raw-loader"
            }, {
                test: /\.(jpe?g|png)$/i,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        // Optimize IDs so that the resources that are most commonly referenced end up with the shortest Ids (reducing size)
        new webpack.optimize.OccurenceOrderPlugin(true),

        new webpack.optimize.UglifyJsPlugin({
            // Must disable mangle or else Angular is unhappy and no-worky
            mangle: false,
            comments: false,
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            title: 'theodolite',
            template: 'src/app/views/index.html'
        }),

        new DashboardPlugin(dashboard.setData)
    ],
    devServer: {
        port: 8000,
        host: 'localhost'
    }
};