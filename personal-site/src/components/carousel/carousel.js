import React from "react";
import PropTypes from "prop-types";
import CarouselItem from "./carousel-item";
import { Flex } from "../../theme/components";

/**
 * A viewer should be able to see the first item always.
 * On each carousel item, a viewer should always see an indicator that there is more content.
 * A viewer can either scroll through contents, or click next.
 * Should be able to jump back to start.
 */
const Carousel = ({ orderedContent }) => {
  return (
    <Flex>
      {orderedContent.map(content => (
        <CarouselItem key={`content-item-${new Date()}`}>
          {content.content}
        </CarouselItem>
      ))}
    </Flex>
  );
};

Carousel.propTypes = {
  orderedContent: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
};

export default Carousel;
