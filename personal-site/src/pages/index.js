import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, Flex, SubHeader, Box, Text } from "../theme/components";
import { Carousel } from "../components/carousel";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Carousel
        orderedContent={[
          {
            content: (
              <Box>
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
            ),
          },
        ]}
      /> */}
    </Layout>
  );
};

export default IndexPage;
