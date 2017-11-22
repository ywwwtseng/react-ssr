import React from 'react';

const Home = () => (
  <div>
    <div>I'm the home page</div>
    <button onClick={() => console.log('Pressed')}>Press me!</button>
  </div>
);

export default {
  component: Home
};