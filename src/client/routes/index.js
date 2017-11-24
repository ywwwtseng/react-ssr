import App from '../component/App';
import Home from './Home';
import UsersList from './UsersList';
import AdminsList from './AdminsList';
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
        ...UsersList,
        path: '/users',
      },
      {
        ...AdminsList,
        path: '/admins'
      },
      {
        ...NotFound
      }
    ]
  }
];