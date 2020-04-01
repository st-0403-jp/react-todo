const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        'main': path.resolve(__dirname, 'app/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: [
                    {
                        // Babel を利用する
                        loader: 'babel-loader',
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2020 を ES5 に変換
                                '@babel/preset-env',
                                // React の JSX を解釈
                                '@babel/react'
                            ]
                        }
                    }
                ]
            },
            // {
            //     test: /\.(scss|css)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         // 'style-loader',
            //         'css-loader?modules'
            //         // {
            //         //     loader: 'sass-loader',
            //         //     options: {
            //         //         sourceMap: (IS_PROD) ? false : true
            //         //     }
            //         // },
            //         // {
            //         //     loader: 'sass-resources-loader',
            //         //     options: {
            //         //         resources: [
            //         //             path.resolve(__dirname, 'src/styleConfig.scss')
            //         //         ]
            //         //     }
            //         // }
            //     ]
            // },
            // {
            //     test: /\.php$/,
            //     use: [
            //         {
            //             loader: path.resolve(__dirname, 'loader/stringify.js')
            //         }
            //         // {
            //         //     loader: 'file-loader',
            //         //     options: {
            //         //         name: 'css/template.txt'
            //         //     }
            //         // }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    // node: {
    //     fs: 'empty',
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'assets/index.html'),
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'dist/style.css'
        // })
    ],
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
        // contentBase: path.resolve(__dirname, 'dist'),
        // publicPath: '/',
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
    },
};
