import React from 'react';
import UserList from './components/UserList';
import Channel from './components/Channel';
import StyledHome from './style';

export default ({
  auth, users, messages, sendMessage
}) => (
  <StyledHome className="center-align">
    <UserList
      auth={auth}
      users={users}
      logout={()=>{}}
    />
    <Channel
      messages={messages}
      sendMessage={sendMessage}
    />
  </StyledHome>
);