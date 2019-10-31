import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Text, PageTitle, Flex } from "../theme/components";

// TODO: Finish nav for mobile
const Header = ({ siteTitle }) => {
  return (
    <Flex justifyContent="flex-start" mx="4" alignItems="center">
      <PageTitle>{siteTitle}</PageTitle>
      <Text withHover textId="WORK" mr="2">
        <FormattedMessage id="WORK" />
      </Text>
      <Text withHover mr="2">
        <FormattedMessage id="PLAY" />
      </Text>
      <Text withHover mr="2">
        <FormattedMessage id="CONTACT" />
      </Text>
    </Flex>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
