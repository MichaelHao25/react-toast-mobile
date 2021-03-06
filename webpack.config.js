const path = require('path');

module.exports = {
    entry: './src/index.js',
    // mode: 'production',
    // development
    mode:'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        react: 'react',//打包时候排除react
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: require.resolve('snapsvg/dist/snap.svg.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0',
            },
        ]
    },
    resolve: {
        alias: {
            snapsvg: 'snapsvg/dist/snap.svg.js',
        },
    },
};
