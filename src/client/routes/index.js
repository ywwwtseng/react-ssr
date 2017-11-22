import React from 'react';
import Home from './Home';
import UserList from './UserList';

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...UserList,
    path: '/users',
  }
];