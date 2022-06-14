import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [logger];
const middleWares = [loggerMiddleware];

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  // rootReducer,
  persistedReducer,
  undefined,
  composedEnhancers(applyMiddleware(...middleWares))
);

export const persistor = persistStore(store);
