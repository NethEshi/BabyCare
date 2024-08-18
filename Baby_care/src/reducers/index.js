import { combineReducers } from "@reduxjs/toolkit";
import babyReducer from "./baby";
import modulesReducer from "./modules";

const reducers = combineReducers({
    baby: babyReducer,
    modules: modulesReducer,
});

export default reducers;