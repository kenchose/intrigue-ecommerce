import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./root-saga";

const sagaMiddlware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddlware,
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddlware.run(rootSaga);

export const persistor = persistStore(store);
