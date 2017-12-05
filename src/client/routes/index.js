import App from '../components/App';
import Login from './Login';
import Home from './Home';
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
        ...Login,
        path: '/login'
      },
      {
        ...NotFound
      }
    ]
  }
];