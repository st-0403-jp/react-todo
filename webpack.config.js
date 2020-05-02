const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const __srcname = `${__dirname}/src`;

const config = {
    mode: 'development',
    target: 'node',
    entry: {
        'main': path.resolve(__srcname, 'app/index.js'),
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
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
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader?modules'
                    // {
                    //     loader: 'sass-loader',
                    //     options: {
                    //         sourceMap: (IS_PROD) ? false : true
                    //     }
                    // },
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources: [
                    //             path.resolve(__dirname, 'src/styleConfig.scss')
                    //         ]
                    //     }
                    // }
                ]
            },
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
            template: path.resolve(__srcname, 'assets/index.html'),
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'dist/style.css'
        // })
    ],
};

module.exports = config;
