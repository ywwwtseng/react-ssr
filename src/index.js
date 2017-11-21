import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import renderer from './renderer';
import createStore from './client/createStore';


const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});