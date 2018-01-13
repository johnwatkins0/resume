import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

import packageJson from './package.json';

const main = () => {
  const entry = {
    [packageJson.name]: ['./src/style.css'],
  };
  const plugins = [new ExtractTextPlugin(`[name].css`)];

  return {
    entry,
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader'],
          }),
        },
      ],
    },
    devServer: {
      open: true,
    },
  };
};

export default main;
