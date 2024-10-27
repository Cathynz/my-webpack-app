const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for Webpack to start bundling
  output: {
    filename: 'bundle.js',   // Name of the output file
    path: path.resolve(__dirname, 'dist'),  // Folder where the output goes
  },
  mode: 'development'  // Set mode to "development" for debugging
};
