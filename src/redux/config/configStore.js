import { createStore } from "redux";
import { combineReducers } from "redux";
import infos from "../modules/todos.js";

const rootReducer = combineReducers({
  infos,
});
const store = createStore(rootReducer);

export default store;
