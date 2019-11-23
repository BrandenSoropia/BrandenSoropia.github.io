import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Box from "./box";

const Image = ({ data, alt, ...rest }) => (
  <Box {...rest}>
    <Img fluid={data.imageOne.childImageSharp.fluid} alt={alt} />
  </Box>
);

Image.propTypes = {
  data: PropTypes.shape(PropTypes.object).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
