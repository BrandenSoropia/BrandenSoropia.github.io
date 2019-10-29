import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p`
  ${({ theme, subdued, withHover }) => `
        color: ${theme.colors.text.primary};
        font-size: 12px;
        ${subdued ? "opacity: 0.3;" : ""}
        ${withHover ? "&:hover { cursor: pointer; }" : ""}
    `}
`;

Text.propTypes = {
  subdued: PropTypes.bool,
  withHover: PropTypes.bool,
};

Text.defaultProps = {
  subdued: false,
  withHover: false,
};

export default Text;
