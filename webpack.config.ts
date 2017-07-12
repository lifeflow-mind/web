import * as webpack from 'webpack';
import * as path from 'path';
import 'react-hot-loader/patch';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';

const config: webpack.Configuration = {
  entry: [
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.tsx')
  ],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.join('src'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'node_modules/monaco-editor/min/vs',
      to: 'vs',
    }, {
      from: 'node_modules/katex/dist/fonts',
      to: 'fonts',
    }]),
  ],
  node: {
    fs: 'empty',
    child_process: 'empty',
    module: 'empty',
    net: 'empty',
    readline: 'empty',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'react-hot-loader/webpack',
        'ts-loader',
      ],
    }/*, {
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    }*/, {
      test: /\.css/,
      // include: path.join(__dirname, 'node_modules'),
      use: [
        'style-loader/url',
        'file-loader',
      ],
    }],
  },
};

export default config;
