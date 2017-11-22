import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import createStore from './createStore';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);