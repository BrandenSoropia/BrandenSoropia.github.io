import React from "react";
import { FormattedMessage } from "react-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, SubHeader, Flex } from "../theme/components";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Flex>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          width={[1, 1 / 2]}
        >
          <Header>
            <FormattedMessage id="GREETING" />
          </Header>
          <SubHeader>
            <FormattedMessage id="ABOUT_ME" />
          </SubHeader>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
