const path = require('path');
const webpack = require('webpack');
const WebpackNodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

//
// Configuration for the server-side bundle (server)
// -----------------------------------------------------------------------------
const serverConfig = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser.
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { node: 'current' } }]
          ],
          compact: true,
          plugins: ['transform-class-properties', 'babel-plugin-styled-components']

        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': false
    }),
    new WebpackShellPlugin({ onBuildEnd: [ "nodemon --watch server --exec node server/bundle.js" ] })
  ],

  externals: [WebpackNodeExternals()]
};

module.exports = serverConfig;