// Libraries
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducer, { initialState } from "../state/reducer";

const middlewares = [thunk];

let enhancers = applyMiddleware(...middlewares);

if (process.env.NODE_ENV === "development") {
  const devToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (typeof devToolsExtension === "function") {
    enhancers = devToolsExtension(applyMiddleware(...middlewares));
  }
}

export default createStore(reducer, initialState, enhancers);
