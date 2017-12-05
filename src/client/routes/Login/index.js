import Login from './Login';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import { userLogin } from '../../actions';

const enhance = compose(
  connect(null, { userLogin }),
  withHandlers(() => {
    // https://github.com/acdlite/recompose/issues/472
    let emailField = null;
    let passwordField = null;

    return {
      registerEmailField: props => ref => emailField = ref,

      registerPasswordField: props => ref => passwordField = ref,

      onSubmit: ({ userLogin }) => event => {
        event.preventDefault();
        userLogin({ username: emailField.value, password: passwordField.value });
      }
    }
  })
);

export default {
  component: enhance(Login)
};