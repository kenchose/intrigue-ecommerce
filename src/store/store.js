import { compose, createStore, applyMiddleware } from "redux";
// import { logger } from "redux-logger";

import { rootReducer } from "./rootReducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

// const middleWares = [logger];
const middleWares = [loggerMiddleware];

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers(applyMiddleware(...middleWares))
);
