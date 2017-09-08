var webpack = require('webpack');
module.exports = {
    entry: {
        'app': './app/app.ts'

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            filename: 'app.js',
            minChunk: Infinity

        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })


    ],
    output: {
        path: './dist',

        filename: '[name].js'

    },

    resolve: {
        extensions: ['', '.ts', '.js', '.css', '.html', '.json']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: [/node_modules/],
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.html$/,
            loader: 'raw!html-minify'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    }

};
