import { combineReducers } from "@reduxjs/toolkit";
import babyReducer from "./baby";

const reducers = combineReducers({
    baby: babyReducer,
});

export default reducers;