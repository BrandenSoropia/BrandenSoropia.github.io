import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p`
  ${({ theme, secondary }) => `
        color: ${theme.colors.text.primary};
        ${secondary ? "opacity: 0.3;" : ""}
    `}
`;

Text.propTypes = {
  secondary: PropTypes.bool,
};

Text.defaultProps = {
  secondary: false,
};

export default Text;
