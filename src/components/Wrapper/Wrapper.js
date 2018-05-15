import React from 'react';
import PropTypes from 'prop-types';

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Wrapper({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '860px',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
}
