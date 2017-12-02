import React from 'react';
import { renderRoutes } from 'react-router-config';
import { getCurrentUser } from '../actions';

const App = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(getCurrentUser())
};