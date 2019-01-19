const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Docker Vue'
        })
    ],
    module: {
        rules: [
            { 
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1} },
                    'postcss-loader'
                ]
            },

            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1} },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
          ]
    }    
}
