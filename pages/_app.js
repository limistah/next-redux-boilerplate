import React, { Component } from "react";
import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import makeStore from "../store";
import BaseContextProvider from "./_base";

class NextApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
    };
  }
  loadAppData = () => {
    this.setState({ appIsReady: false });
  };
  componentDidMount() {
    this.loadAppData();
  }
  render() {
    const { Component, pageProps, store, isServer } = this.props;
    const pageRequiresAuth = Component.requiresAuth;

    return (
      <>
        {!pageRequiresAuth || this.state.appIsReady ? (
          <Provider store={store}>
            <BaseContextProvider
              {...{
                requiresAuth: Component.requiresAuth,
                isServer,
              }}
            >
              <Component {...{ ...pageProps, Component }} />
            </BaseContextProvider>
          </Provider>
        ) : (
          <>Loading</>
        )}
      </>
    );
  }
}
export default withRedux(makeStore)(NextApp);
