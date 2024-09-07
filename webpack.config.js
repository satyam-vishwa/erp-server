import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'module', // Use ES modules for output
    chunkFormat: 'module'    // Explicitly set chunk format to 'module'
  },
  experiments: {
    outputModule: true,       // Enable output as ES module
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,      // Support .js and .mjs files
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
    extensions: ['.js', '.mjs'], // Support import without file extension
  },
  target: 'node14',             // Explicitly set the target environment to Node.js
  externals: {
    // Exclude node_modules from the bundle
    node_modules: path.resolve(__dirname, 'node_modules'),
  },
};
