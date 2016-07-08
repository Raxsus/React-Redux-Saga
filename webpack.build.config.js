import path from 'path';
import webpack from 'webpack';

const rootDir = __dirname;
const srcDir = 'src';
const buildDir = 'public';
const modulesDir = 'node_modules';
const assetsDir = 'assets';
const srcPath = path.join(rootDir, srcDir);
const buildPath = path.join(rootDir, buildDir);

const sourceMap = 'source-map';

export default {

    context: srcPath,

    entry: {
        index: './index'
    },

    output: {
        path: path.join(buildPath, assetsDir),
        filename: '[name].js',
        library: '[name]'
    },

    devtool: sourceMap,

    resolve: {
        modulesDirectories: [ modulesDir ],
        extensions: [ '', '.js', '.jsx' ],
        root: srcPath
    },

    resolveLoader: {
        modulesDirectories: [ modulesDir ],
        moduleTemplates: [ '*-loader', '*' ],
        extensions: [ '', '.js' ]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: srcPath
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],

    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        hot: true
    }
};