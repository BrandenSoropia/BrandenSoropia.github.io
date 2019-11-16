import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, SubHeader, Box, Text, Image, Flex } from "../theme/components";

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
        <Box>
          <button type="button">
            <Text id="TEST" />
          </button>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
