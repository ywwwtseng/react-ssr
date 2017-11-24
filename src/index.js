import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import routes from './client/routes';
import renderer from './renderer';
import createStore from './client/createStore';
import axios from 'axios';

const app = express();

app.use(
  '/api',
  proxy(
    'http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    }
  )
);
app.use(express.static('public'));
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