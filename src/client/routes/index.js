import App from '../component/App';
import Home from './Home';
import UserList from './UserList';
import NotFound from './NotFound';

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
      },
      {
        ...NotFound
      }
    ]
  }
];