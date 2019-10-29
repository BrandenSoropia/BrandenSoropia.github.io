import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import Header from "./header";
import _theme from "../theme";
import "./layout.css";
import EN_CA from "../i18n/en-CA";

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </ThemeProvider>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
