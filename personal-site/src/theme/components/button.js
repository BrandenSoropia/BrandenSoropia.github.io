import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  border,
  typography,
  variant,
} from "styled-system";

const primaryStyles = {
  px: 4,
  py: 3,
  backgroundColor: "button.primary.backgroundColor",
  color: "button.primary.text",
  borderColor: "button.primary.backgroundColor",
  fontWeight: "bold",
  tabIndex: 0,
  cursor: "pointer",
};

export const buttonVariantStyles = {
  primary: primaryStyles,
};

/**
 * To add new button styles, use variants! Steps:
 * 1) Define your styles and add them to `buttonStyles`
 * 2) Add the variant key in the variants object below.
 *
 * Doing this should be enough! The button styles are added to the theme.
 * Note: These variants have access to all the theme values.
 * Note 2: Do not use conflicting styled-system props when using this component.
 * Ex: don't define "color" again in <Button />
 */
const StyledButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${typography}
  ${variant({
    scale: "buttons",
    variants: {
      primary: null,
    },
  })}
`;
/**
 *
 * @param {Object} rest should have all the styled-system props.
 */
const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={onClick}>
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
