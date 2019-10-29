import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Text, PageTitle, Flex } from "../theme/components";

// TODO: Finish nav for mobile
const Header = ({ siteTitle }) => {
  return (
    <Flex justifyContent="space-between" mx="4" alignItems="center">
      <PageTitle>{siteTitle}</PageTitle>
      <Text withHover>
        <FormattedMessage id="MENU" />
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
