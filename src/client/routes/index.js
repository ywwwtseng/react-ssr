import React from 'react';
import Home from './Home';
import Users, { loadData } from './Users';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: Users,
    loadData
  }
];