import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { formReducer, listReducer } from "./reducers/index";

const rootReducer = combineReducers({
  form: formReducer,
  list: listReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
