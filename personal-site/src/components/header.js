import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Text, PageTitle, Flex } from "../theme/components";

const MarginRightText = styled(Text).attrs(() => ({
  mr: "4",
}))``;

// TODO: Finish nav for mobile
const Header = ({ siteTitle }) => {
  return (
    <Flex justifyContent="flex-start" mx="4" mt="3" alignItems="center">
      <PageTitle mr="4">{siteTitle}</PageTitle>
      <MarginRightText withHover textId="WORK">
        <FormattedMessage id="WORK" />
      </MarginRightText>
      <MarginRightText withHover>
        <FormattedMessage id="PLAY" />
      </MarginRightText>
      <MarginRightText withHover>
        <FormattedMessage id="CONTACT" />
      </MarginRightText>
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
