import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  width: 100%;
`;

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <p>{siteTitle}</p>
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
