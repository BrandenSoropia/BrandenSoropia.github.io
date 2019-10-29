import styled from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, typography } from "styled-system";
import propTypes from "@styled-system/prop-types";

export const Text = styled.p`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${({ subdued, withHover }) => `
      ${subdued ? "opacity: 0.3;" : ""}
      ${withHover ? "&:hover { cursor: pointer; }" : ""}
  `}
`;

Text.propTypes = {
  subdued: PropTypes.bool,
  withHover: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
};

Text.defaultProps = {
  subdued: false,
  withHover: false,
};

export const NormalText = styled(Text).attrs(() => ({
  fontSize: [0, 1],
}));

export const PageTitle = styled(Text).attrs(() => ({
  fontSize: "4",
  fontWeight: "bold",
}))``;
