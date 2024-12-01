import { combineReducers } from "@reduxjs/toolkit";
import babyReducer from "./baby";
import modulesReducer from "./modules";
import midwifeReducer from "./midwife";

const reducers = combineReducers({
    baby: babyReducer,
    modules: modulesReducer,
    midwife: midwifeReducer,
});

export default reducers;