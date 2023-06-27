import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { formReducer, guestListReducer } from "./reducers/index";

const rootReducer = combineReducers({
  form: formReducer,
  guestList: guestListReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
