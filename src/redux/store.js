import authReducer from "@/redux/slices/auth.slice";
import questionReducer from "@/redux/slices/question.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
