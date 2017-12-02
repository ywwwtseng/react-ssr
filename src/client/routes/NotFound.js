import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (<p>Oops, route not found.</p>);
};

export default {
  component: NotFound
};