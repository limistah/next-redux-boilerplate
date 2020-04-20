import defaultState from "./defaultState";

export default (isServer) =>
  isServer ? defaultState : __NEXT_DATA__.props.initialState;
