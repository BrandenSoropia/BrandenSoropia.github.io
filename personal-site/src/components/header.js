import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Text } from "../theme";

const Container = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  margin: 48px 24px;
  position: relative;
`;

// TODO: Finish nav for mobile
const Header = ({ siteTitle }) => {
  return (
    <Container>
      <Text>{siteTitle}</Text>
      <Text withHover>
        <FormattedMessage id="MENU" />
      </Text>
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
