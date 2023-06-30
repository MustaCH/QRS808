import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { formReducer, guestListReducer, authReducer } from "./reducers/index";

const rootReducer = combineReducers({
  form: formReducer,
  guestList: guestListReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
