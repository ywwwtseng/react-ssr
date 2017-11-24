import App from '../component/App';
import Home from './Home';
import UserList from './UserList';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UserList,
        path: '/users',
      }
    ]
  }
];