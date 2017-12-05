import React from 'react';
import StyledHome from './style';

export default ({
  users
}) => (
  <StyledHome className="center-align">
    {JSON.stringify(users)}
  </StyledHome>
);