import { combineReducers, createStore } from "redux";
import modal from "redux/modules/modal";
import select from "redux/modules/select";

const rootReducer = combineReducers({
  modal,
  select
});
const store = createStore(rootReducer);

export default store;
