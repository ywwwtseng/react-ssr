import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import routes from '../client/routes';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const sheet = new ServerStyleSheet();

export default (req, store, context) => {
  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  );

  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          ol, ul {
	          list-style: none;
          }
          
          :focus {
            outline: 0 none !important;
          }
          
          body {
            font-family: "Roboto", Helvetica, Arial, sans-serif;
          }
        </style>
        ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};