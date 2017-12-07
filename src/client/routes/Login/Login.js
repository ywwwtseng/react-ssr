import React from 'react';
import StyledLogin from './style';

export default ({
  onSubmit,
  registerEmailField,
  registerPasswordField
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
          <input ref={registerEmailField} id="InputUsername" />
          <label htmlFor="InputPassword">PASSWORD</label>
          <input ref={registerPasswordField} id="InputPassword" type="password" />
        </div>
        <button>LOG IN</button>
      </div>
    </form>
  </StyledLogin>
);