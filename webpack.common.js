const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        index: './src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {

        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js', // Output file name
        // publicPath: '/Resturant_page_odin/',
        // publicPath:'/dist/',
        clean: true,

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        
        ]
    },

};