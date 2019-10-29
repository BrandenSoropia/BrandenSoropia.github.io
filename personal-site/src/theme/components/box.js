import styled from "styled-components";
import { space, layout, color } from "styled-system";
import propTypes from "@styled-system/prop-types";

export const Box = styled.div`
  ${space}
  ${layout}
  ${color}
`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
};

export default Box;
