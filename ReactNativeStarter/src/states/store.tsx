import axiosMiddleware from "redux-axios-middleware";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./reducer";
import { options, client } from "./axios-middleware.config";

const persistedReducer = rootReducer;

export const store = createStore(
  persistedReducer,
  applyMiddleware(axiosMiddleware(client, options))
);

export const persistor = persistStore(store);
