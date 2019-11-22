import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text, PageTitle, Flex, Button, Link } from "../theme/components";

const MarginRightLink = styled(Link).attrs(() => ({
  mr: "4",
}))``;

const Header = ({ siteTitle }) => {
  return (
    <Flex justifyContent="flex-start" mx="4" pt="3" alignItems="center">
      <PageTitle mr="4">{siteTitle}</PageTitle>
      <MarginRightLink textId="WORK" to="#" />
      <MarginRightLink textId="FUN" to="#" />
      <MarginRightLink textId="CONTACT" to="#" />
      <Button variant="primary" ml="auto" onClick={() => {}}>
        <Text m="0" textId="RESUME_PROMPT" />
      </Button>
    </Flex>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
