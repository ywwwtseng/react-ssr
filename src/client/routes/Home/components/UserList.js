import React from 'react';
import cx from 'classnames';

export default ({ auth, users }) => (
  <div className="userList">
    <h1>Chat</h1>
    <div>
      <div className="online" />
      <span>{auth.username}</span>
    </div>
    <h3>#users</h3>
    <ul>
      {users.map(user => (
        <li key={user._id}>
          <div className={cx({ online: user.online })} />
          <span>{user.username}</span>
        </li>
      ))}
    </ul>
  </div>
);