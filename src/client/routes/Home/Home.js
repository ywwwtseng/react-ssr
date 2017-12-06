import React from 'react';
import { Link } from 'react-router-dom';
import StyledHome from './style';

export default ({
  users
}) => (
  <StyledHome className="center-align">
    {JSON.stringify(users)}
    <Link to="/login" >Logout</Link>
  </StyledHome>
);