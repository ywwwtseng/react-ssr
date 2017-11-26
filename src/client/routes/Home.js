import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Home = () => (
  <div className="center-align" style={{ marginTop: '200px' }}>
    <Title className="test">Welcome</Title>
  </div>
);

export default {
  component: Home
};