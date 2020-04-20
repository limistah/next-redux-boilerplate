// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  MainJsScripts() {
    return <React.Fragment></React.Fragment>;
  }

  JsScripts() {
    return <React.Fragment></React.Fragment>;
  }
  render() {
    const JsScripts = this.JsScripts;
    const MainJsScripts = this.MainJsScripts;
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/css/main.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&amp;subset=cyrillic,cyrillic-ext,latin-ext"
          ></link>
        </Head>
        <body className="">
          <MainJsScripts />
          <Main />
          <NextScript />
          <JsScripts />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
