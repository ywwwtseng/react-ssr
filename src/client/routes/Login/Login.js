import React from 'react';
import cx from 'classnames';
import StyledLogin from './style';

export default ({
  onSubmit,
  registerEmailField, emailFieldError, setEmailFieldError,
  registerPasswordField, passwordFieldError, setPasswordFieldError
}) => (
  <StyledLogin>
    <form onSubmit={onSubmit}>
      <div className="topBar">
        <h1>Log in</h1>
        <p>Server side rending real-time demo</p>
      </div>
      <div className="bottomBar">
        <div className="fieldsContainer">
          <label htmlFor="InputUsername">USERNAME</label>
          <input
            className={cx({ error: emailFieldError })}
            ref={registerEmailField}
            id="InputUsername"
            onChange={() => setEmailFieldError(false)}
          />
          <label htmlFor="InputPassword">PASSWORD</label>
          <input
            className={cx({ error: passwordFieldError })}
            ref={registerPasswordField}
            id="InputPassword"
            onChange={() => setPasswordFieldError(false)}
            type="password"
          />
        </div>
        <button>LOG IN</button>
      </div>
    </form>
  </StyledLogin>
);