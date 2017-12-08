import React from 'react';
import UserList from './components/UserList';
import Channel from './components/Channel';
import StyledHome from './style';

export default ({
  auth, users,
  messages, sendMessage,
  message, setMessage
}) => (
  <StyledHome className="center-align">
    <UserList
      auth={auth}
      users={users}
    />
    <Channel
      messages={messages}
      sendMessage={sendMessage}
      message={message}
      setMessage={setMessage}
    />
  </StyledHome>
);