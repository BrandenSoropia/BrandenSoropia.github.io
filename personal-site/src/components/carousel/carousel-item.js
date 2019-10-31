import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../theme/components";

const CarouselItem = ({ children }) => {
  return <Box>{children}</Box>;
};

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselItem;
