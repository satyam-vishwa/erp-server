import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  entry: './index.js', // Corrected path to entry point
  output: {
    path: path.resolve('dist'),
    filename: 'index.cjs',
  },
  externals: [nodeExternals()], // Excludes node_modules from the bundle
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

