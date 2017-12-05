import Login from './Login';
import { compose } from 'recompose';
import withHandlers from 'recompose/withHandlers';

const enhance = compose(
  withHandlers(() => {
    // https://github.com/acdlite/recompose/issues/472
    let emailField = null;
    let passwordField = null;

    return {
      registerEmailField: props => ref => emailField = ref,

      registerPasswordField: props => ref => passwordField = ref,

      onSubmit: props => event => {
        event.preventDefault();
        console.log(emailField.value, passwordField.value);
      }
    }
  })
);

export default {
  component: enhance(Login)
};