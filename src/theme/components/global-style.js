import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 /* For site wide styles. Colors should match the ones in theme. */
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

html {
  background-color: #ffffff;
  font-family: "Raleway", sans-serif;
  height: 100%;
  width: 100%;
}

body {
  color: #000000;
  height: 100%;
  margin: 0;
}

#___gatsby {
  height: 100%;
}

div[role="group"][tabindex] {
  height: 100%;
}

/**
 * src: https://css-tricks.com/overriding-default-button-styles/#article-header-id-2
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
`;

export default GlobalStyle;
