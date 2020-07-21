import * as React from "react";
import { AppProps } from "next/app";
import { Provider } from "mobx-react";
import { createGlobalStyle } from "styled-components";

import ScrollToTop from "components/ScrollToTop";
import stores from "stores";

// CSS Reset Code
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button:focus {
    outline: none;
  }
  input {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    :disabled {
      background-color: #f2f2f2;
      color: #777;
    }
    &:focus {
      outline: none;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...stores}>
      <ScrollToTop>
        <GlobalStyle />
        <title>Next.js & Mobx BoilerPlate</title>
        <Component {...pageProps} />
      </ScrollToTop>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;