import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  margin: '1rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  fontSize: '4rem',
  width: '10rem',
  height: '10rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const frontStyle = {
  ...styles,
  backgroundColor: '#FFE74C',
  cursor: 'not-allowed',
};
const backStyle = {
  ...styles,
  backgroundColor: '#eaeaed',
};

Card.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  showCard: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default function Card({ isActive, isDisabled, showCard, children }) {
  return (
    <div
      onClick={isActive || isDisabled ? null : showCard}
      style={isActive ? frontStyle : backStyle}
    >
      {isActive && children}
    </div>
  );
}
