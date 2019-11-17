import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, color, border } from "styled-system";

// TODO: Make primary button
const primaryStyles = {
  px: 4,
  py: 3,
  backgroundColor: "button.primary.backgroundColor",
  color: "button.primary.text",
  borderColor: "button.primary.backgroundColor",
  fontWeight: "bold",
  tabIndex: 0,
};

const StyledButton = styled.button.attrs(({ primary }) => ({
  ...(primary && primaryStyles),
}))`
  cursor: pointer;

  ${space}
  ${layout}
  ${color}
  ${border}
`;
/**
 *
 * @param {Object} rest should have all the styled-system props.
 */
const Button = ({ primary, children, onClick, ...rest }) => {
  return (
    <StyledButton {...rest} primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
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
