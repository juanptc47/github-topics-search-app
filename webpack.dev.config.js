var webpack = require('webpack');
var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public/dev'),
        filename: 'client.dev.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/},
            {test: /\.(ts|tsx)$/, loaders: ['ts-loader'], exclude: /node_modules/},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']},
            {test: /\.json$/, loaders: ['json-loader']},
            {test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader', options: {name: 'img/[hash:16].[ext]'}},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', options: {name: 'fonts/[hash:16].[ext]'}},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', options: {name: 'fonts/[hash:16].[ext]'}},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', options: {name: 'fonts/[hash:16].[ext]'}},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', options: {name: 'fonts/[hash:16].[ext]'}}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public/dev'),
        compress: true,
        port: 8080,
        hot: true,
      }
};

module.exports = webpackConfig;
