import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import Header from "./header";
import _theme from "../theme";
import "./layout.css";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.grey};
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={_theme}>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
