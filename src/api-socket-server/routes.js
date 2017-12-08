import passport from 'passport';
import './services/passport';
import isAuthenticated from './middlewares/isAuthenticated';
import AuthController from './controllers/auth_controller';
import UserController from './controllers/user_controller';
import MessageController from './controllers/message_controller';

const routes = app => {
  app.post('/login', passport.authenticate('local'), AuthController.login);
  app.post('/logout', isAuthenticated, AuthController.logout);
  app.get('/auth', isAuthenticated, AuthController.auth);
  app.get('/current_user', isAuthenticated, UserController.current_user);
  app.get('/users', isAuthenticated, UserController.users);
  app.get('/messages', isAuthenticated, MessageController.messages)
};

export default routes;