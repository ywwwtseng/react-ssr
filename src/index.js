import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import routes from './client/routes';
import renderer from './renderer';
import createStore from './client/createStore';
import axios from 'axios';
import ApiSocketServer from './api-socket-server';
import config from './config';

// Api Socket Server
const apiSocketServer = new ApiSocketServer();
apiSocketServer.listen(config.SOCKET_SEVER_PORT);

// Web Server
const app = express();

app.use(
  '/api',
  proxy(
    'http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(proxyReqOpts) {
        proxyReqOpts.headers['x-forwarded-host'] = 'localhost:3000';
        return proxyReqOpts;
      }
    }
  )
);
app.use(express.static('client'));
app.get('*', (req, res) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(undefined, axiosInstance);

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  const render = () => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  };

  Promise.all(promises).then(render).catch(render);

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});