import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import Header from "./header";
import _theme from "../theme";
import EN_CA from "../i18n/en-CA";
import { GlobalStyle, Box } from "../theme/components";

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

  // eslint-disable-next-line no-undef
  const locale = navigator.language;
  const messages = {
    "en-CA": EN_CA,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={_theme}>
        <GlobalStyle />
        <Box mx="4" height="100%">
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </Box>
      </ThemeProvider>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
