import Login from './Login';
import { compose } from 'recompose';
import withState from 'recompose/withState';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import { userLogin } from '../../actions';

const enhance = compose(
  withState(
    'emailFieldError',
    'setEmailFieldError',
    false
  ),

  withState(
    'passwordFieldError',
    'setPasswordFieldError',
    false
  ),

  connect(null, { userLogin }),

  withHandlers(() => {
    // https://github.com/acdlite/recompose/issues/472
    let emailField = null;
    let passwordField = null;

    return {
      registerEmailField: props => ref => emailField = ref,

      registerPasswordField: props => ref => passwordField = ref,

      onSubmit: ({ userLogin, setEmailFieldError, setPasswordFieldError }) => event => {
        event.preventDefault();
        userLogin({ username: emailField.value, password: passwordField.value })
          .catch(error => {
            if (error.response && error.response.status) {
              switch (error.response.status) {
                case 400:
                  if (!emailField.value) setEmailFieldError(true);
                  if (!passwordField.value) setPasswordFieldError(true);
                  break;
                case 401:
                  setPasswordFieldError(true);
                  break;
                default:
                  break;
              }
            }
          });
      }
    }
  })
);

export default {
  component: enhance(Login)
};