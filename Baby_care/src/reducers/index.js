import { combineReducers } from "@reduxjs/toolkit";
import babyReducer from "./baby";
import modulesReducer from "./modules";
import midwifeReducer from "./midwife";
import doctorReducer from "./doctor";

const reducers = combineReducers({
    baby: babyReducer,
    modules: modulesReducer,
    midwife: midwifeReducer,
    doctor: doctorReducer,
});

export default reducers;