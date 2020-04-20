import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import state from "./state";
import { fromJS } from "immutable";
import fetch from "isomorphic-unfetch";

import { createMiddleware } from "redux-api-middleware";

function buildStoreEnhancers(isServer = false) {
  const enhancers = [];
  // Dev tools are helpful
  if (process.env.NODE_ENV === "development" && !isServer) {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }
  return enhancers;
}

function composeEnhancers(enhancers, middleware) {
  return compose(applyMiddleware(...middleware), ...enhancers);
}

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

export default (initialState, options) => {
  const enhancers = buildStoreEnhancers(options.isServer);
  const middleware = [thunk, createMiddleware({ fetch: fetch })];
  !options.isServer ? middleware.push(logger) : null;
  const composedEnhancers = composeEnhancers(enhancers, middleware);
  initialState = fromJS(initialState ? initialState : state(options.isServer));
  return createStore(reducers, initialState, composedEnhancers);
};
