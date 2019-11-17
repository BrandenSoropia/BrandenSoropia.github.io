import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text, PageTitle, Flex, Button } from "../theme/components";

const MarginRightText = styled(Text).attrs(() => ({
  mr: "4",
}))``;

const Header = ({ siteTitle }) => {
  return (
    <Flex justifyContent="flex-start" mx="4" pt="3" alignItems="center">
      <PageTitle mr="4">{siteTitle}</PageTitle>
      <MarginRightText withHover textId="WORK" />
      <MarginRightText withHove textId="FUN" />
      <MarginRightText withHover textId="CONTACT" />
      <Button ml="auto" onClick={() => {}}>
        <Text m="0" textId="RESUME_PROMPT" />
      </Button>
    </Flex>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
