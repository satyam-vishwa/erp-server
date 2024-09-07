import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  // Set the entry point for your application
  entry: './index.js',
  
  // Define the output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  
  // Set the mode to 'production'
  mode: 'production',
  
  // Add configuration for resolving modules
  resolve: {
    extensions: ['.js', '.json']
  },
  
  // Define the rules for loading files
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  
  // Exclude node_modules from the bundle
  externals: [nodeExternals()],
  
  // Add source map support for easier debugging
  devtool: 'source-map'
};
