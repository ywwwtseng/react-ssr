import AuthController from './controllers/auth_controller';
import passport from 'passport';

const routes = app => {
  app.post('/login', passport.authenticate('local'), AuthController.login);
};

export default routes;