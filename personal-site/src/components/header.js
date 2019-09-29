import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Text } from "../theme";

const Container = styled.div`
  background-color: transparent;
  width: 100%;
`;

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <p>{siteTitle}</p>
      <Text>About</Text>
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
