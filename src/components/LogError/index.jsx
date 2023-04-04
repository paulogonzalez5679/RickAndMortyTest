import React from 'react';

import './styles.scss';

const LogError = ({ message }) => {
  return (
    <>
      <span className="error">{JSON.stringify(message)}</span>
    </>
  );
};

export default LogError;
