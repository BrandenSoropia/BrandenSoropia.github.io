import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { space, layout, color, typography } from "styled-system";
import styled from "styled-components";

// TODO: Define variant for in dev link to be used for Work and Fun tbas when empty.
const StyledGatsbyLink = styled(GatsbyLink).attrs(() => ({
  tabIndex: 0,
  fontWeight: "bold",
}))`
  a:active {
    text-decoration: none;
  }

  ${space}
  ${layout}
  ${color}
  ${typography}
`;

const Link = ({ textId, values, children, to, ...rest }) => {
  const { formatMessage } = useIntl();

  return (
    <StyledGatsbyLink to={to} {...rest}>
      {textId ? formatMessage({ id: textId, values }) : children}
    </StyledGatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  textId: PropTypes.string,
  children: PropTypes.node,
  values: PropTypes.shape({}),
};

Link.defaultProps = {
  textId: "",
  children: null,
  values: null,
};

export default Link;
