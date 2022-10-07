const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: './src/index.html',
        }),

    ],
    devtool: 'inline-source-map',
    module: {
        rules: [{

            test: /\.(png|svg|jpg|jpeg|gif)$/i,

            type: 'asset/resource',

        },
        ]
    }
};
