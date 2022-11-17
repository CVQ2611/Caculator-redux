import { configureStore } from "@reduxjs/toolkit";
import expresstionReducer from "../reducer/addCurrentExpresstion.js";

const store = configureStore({
    reducer: {
        expresstion: expresstionReducer,
    },
});

export default store;
