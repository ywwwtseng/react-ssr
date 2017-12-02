const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//
// Configuration for the client-side bundle (client)
// -----------------------------------------------------------------------------
const clientConfig = {
  // Tell webpack the root file of our
  // server application
  entry: [
    'babel-polyfill',
    './src/client/index.js'
  ],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client')
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
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          compact: true,
          plugins: ['babel-plugin-styled-components']
        }
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/client/assets'),
        to: path.resolve(__dirname, 'client/assets')
      }
    ])
  ]
};

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
          plugins: ['babel-plugin-styled-components']

        }
      }
    ]
  },

  externals: [WebpackNodeExternals()]
};

module.exports = [clientConfig, serverConfig];