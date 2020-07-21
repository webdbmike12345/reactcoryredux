import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (intialState) => {
  return createStore(
    rootReducer,
    intialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  )
};

export default configureStore;
