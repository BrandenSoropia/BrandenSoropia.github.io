import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, typography } from "styled-system";
import propTypes from "@styled-system/prop-types";
import { useIntl } from "react-intl";

export const BaseText = styled.p`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${({ subdued, withHover }) => `
      ${subdued ? "opacity: 0.3;" : ""}
      ${withHover ? "&:hover { cursor: pointer; }" : ""}
  `}
`;

/**
 * Display either react-intl textId with values (optional) or children.
 * @param {object} rest - used to pass styled-system props
 */
export const Text = ({ textId, children, values, ...rest }) => {
  const { formatMessage } = useIntl();

  return (
    <BaseText {...rest}>
      {textId ? formatMessage({ id: textId, values }) : children}
    </BaseText>
  );
};

/**
 * Ideally I would write a custom prop validator to require at least
 * `textId` or `text`. Hopefully it doesn't come back to bite me later!
 */
Text.propTypes = {
  textId: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

Text.defaultProps = {
  textId: "",
  values: null,
  children: null,
};

BaseText.propTypes = {
  subdued: PropTypes.bool,
  withHover: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
};

BaseText.defaultProps = {
  subdued: false,
  withHover: false,
};

export const NormalBaseText = styled(Text).attrs(() => ({
  fontSize: [0, 1],
}));

export const PageTitle = styled(Text).attrs(() => ({
  fontSize: "2",
  fontWeight: "bold",
}))``;

export const Header = styled(Text).attrs(() => ({
  fontSize: "6",
  fontWeight: "bold",
}))``;

export const SubHeader = styled(Text).attrs(() => ({
  fontSize: "3",
  fontWeight: "bold",
  lineHeight: "28px",
}))``;
