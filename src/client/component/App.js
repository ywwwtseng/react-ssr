import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <h1>I'm a header</h1>
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App
};