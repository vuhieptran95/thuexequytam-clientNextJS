import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";
import Loader from "./../helper/Loader";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const TIMEOUT = 300;
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* <PageTransition timeout={TIMEOUT} classNames="page-transition"> */}
        <Component {...pageProps} />
        {/* </PageTransition> */}
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </Container>
    );
  }
}
