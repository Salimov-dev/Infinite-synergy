import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersListReducer from "./users-list.store";

const rootReducer = combineReducers({
  users: usersListReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
