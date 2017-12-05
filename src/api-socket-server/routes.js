import passport from 'passport';
import './services/passport';
import AuthController from './controllers/auth_controller';
import isAuthenticated from './middlewares/isAuthenticated';

const routes = app => {
  app.post('/login', passport.authenticate('local'), AuthController.login);
  app.get('/auth', isAuthenticated, AuthController.auth)

};

export default routes;