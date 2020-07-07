const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { env, cwd } = process;
const Root = cwd();
const PROJECT_NAME = 'innovance';

module.exports = {
  entry: ['react-hot-loader/patch', `${Root}/src/index.tsx`],
  mode: env.NODE_ENV || 'development',
  output: {
    publicPath: '/',
    filename: `[name].${PROJECT_NAME}.js?[hash]`,
    path: `${Root}/build/`,
  },
  resolve: {
    alias: {
      '@/': `${Root}/src`
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader', 
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  devServer: {
    contentBase: './build',
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `${Root}/public/index.html`,
      filename: 'index.html',
      favicon: `${Root}/public/favicon.ico`,
      inject: true,
    }),
    new Dotenv()
  ],
};
