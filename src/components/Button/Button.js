import React from "react";
import PropTypes from "prop-types";

const styles = {
  display: "inline-block",
  backgroundColor: "#388BCB",
  border: "2px solid #388BCB",
  fontSize: "0.875rem",
  lineHeight: "2rem",
  color: "#FFFFFF",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  outline: "0",
  cursor: "pointer"
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={styles}>
      {label}
    </button>
  );
}
