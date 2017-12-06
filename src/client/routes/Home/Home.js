import React from 'react';
import { Link } from 'react-router-dom';
import StyledHome from './style';

export default ({
  users, messages, sendMessage
}) => (
  <StyledHome className="center-align">
    {JSON.stringify(users)}
    <Link to="/login" >Logout</Link>
    {JSON.stringify(messages)}
    <button onClick={() => sendMessage('test')}>sendMessage</button>
  </StyledHome>
);