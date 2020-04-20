import types from "../types";
import state from "../defaultState";
import { fromJS } from "immutable";

const initialState = state.user;
export default function app(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER_DATA:
      return state.setIn(["data"], fromJS(action.payload));
    case types.SET_CURRENT_USER_ERROR:
      return state.setIn(["error"], fromJS(action.payload));
    default:
      return state;
  }
}
