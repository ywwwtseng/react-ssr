import passport from 'passport';
import './services/passport';
import isAuthenticated from './middlewares/isAuthenticated';
import AuthController from './controllers/auth_controller';
import Usercontroller from './controllers/user_controller';

const routes = app => {
  app.post('/login', passport.authenticate('local'), AuthController.login);
  app.get('/auth', isAuthenticated, AuthController.auth);
  app.get('/current_user', isAuthenticated, Usercontroller.current_user);
  app.get('/users', isAuthenticated, Usercontroller.users);

};

export default routes;