import React from "react";
import { FormattedMessage } from "react-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, SubHeader, Box, Text } from "../theme/components";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box flexDirection="column" height="100%" alignItems="left">
        <Header>
          <FormattedMessage id="GREETING" />
        </Header>
        <SubHeader>
          <FormattedMessage id="ONE_LINER_ABOUT_ME" />
        </SubHeader>
      </Box>
    </Layout>
  );
};

export default IndexPage;
