import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from '@material-ui/styles'

const SITE_NAME = "SITE_NAME";
const SITE_TITLE = "SITE_TITLE";
const SITE_DESCRIPTION = "SITE_DESCRIPTION";
const SITE_IMAGE = "SITE_IMAGE";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const sheet2 = new ServerStyleSheets()
    const page = renderPage(App => props =>
      sheet.collectStyles(sheet2.collect(<App {...props} />)),
    )
    const styleTags = sheet.getStyleElement()
    const styleTags2 = sheet2.getStyleElement()
    return { ...page, styleTags, styleTags2 }
  }
  setGoogleTags() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155067425-1');
      `
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'/>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* Google Analytics */}
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          {this.props.styleTags}
          {/* {this.props.styleTags2} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
