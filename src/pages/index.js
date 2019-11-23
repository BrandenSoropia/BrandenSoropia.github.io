import React from "react";
import { FormattedMessage } from "react-intl";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, SubHeader, Flex, Image } from "../theme/components";

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "cat.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log("### data", data);
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
        <Image m="0 auto" data={data} alt="Cool cat with shades." />
      </Flex>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape(PropTypes.object).isRequired,
};

export default IndexPage;
