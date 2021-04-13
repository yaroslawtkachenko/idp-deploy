const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config.common');
const DotenvWebpack = require('dotenv-webpack');

function devConfig() {
  return {
    mode: 'development',
    stats: 'minimal',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    plugins: [new DotenvWebpack({ path: './.env.dev' })],
  };
}

module.exports = () => merge(commonConfig, devConfig());
