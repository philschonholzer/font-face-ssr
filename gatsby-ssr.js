/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const CleanCSS = require("clean-css")

const staticStyle = `
  <!-- font-face defined-in gatsby-ssr.js -->
  @font-face {
    font-family: 'Fira Code';
    font-display: fallback;
    src: url('/font/FiraCode-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Code';
    font-display: fallback;
    src: url('/font/FiraCode-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
`
// eslint-disable-next-line no-underscore-dangle
const __html = new CleanCSS().minify(staticStyle).styles

exports.onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <style
      key="font-face"
      data-type="static styles in gatsby-ssr.js"
      dangerouslySetInnerHTML={{ __html }}
    />,
  ])
}
