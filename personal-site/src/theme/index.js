// Theme values
import colors from "./colors";

/**
 * `styled-systems` can reference these values In their props. Explanation:
 * The keys in the theme object should typically correspond with
 * the CSS properties they are used for, and follow a plural naming convention. For example,
 * the CSS property font-size is expected to use values from the fontSizes scale, and the color property uses values
 * from the colors scale.
 *
 * Some keys can be used for multiple CSS properties, where the data type is the same.
 * The color object is intended to be used with any property that accepts a CSS color value,
 * such as background-color or border-color.
 *
 * Source: It follows https://system-ui.com/theme/
 */
const theme = {
  colors,
};

export default theme;
