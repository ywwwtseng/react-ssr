import React from 'react';
import StyledLogin from './style';

export default ({
  onSubmit,
  registerEmailField,
  registerPasswordField
}) => (
  <StyledLogin>
    <form onSubmit={onSubmit}>
      <h3>Log in</h3>
      <label htmlFor="InputUsername">USERNAME</label>
      <input ref={registerEmailField} id="InputUsername" />
      <label htmlFor="InputPassword">PASSWORD</label>
      <input ref={registerPasswordField} id="InputPassword" />
      <button>LOG IN</button>
    </form>
  </StyledLogin>
);