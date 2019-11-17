import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// TODO: Make primary button
const primaryStyles = {
  p: 3,
};

const Button = ({ primary, children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  primary: true,
};

export default Button;
