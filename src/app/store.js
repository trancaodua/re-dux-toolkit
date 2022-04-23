import counterReducer from "../features/counter/reducer";
import thunk from "redux-thunk";
import multiCounterReducer from "../features/multiCounter/multiCounterSlice";
import todoReducer from "../features/todo/todoSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todo: todoReducer,
  }),
});

export default store;
