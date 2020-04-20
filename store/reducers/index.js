import { combineReducers } from "redux-immutable";

// Store Reducers
import currentUser from "./currentUser";
const reducers = { currentUser };
export default combineReducers(reducers);
