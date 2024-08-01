import authReducer from "@/redux/slices/auth.slice";
import questionReducer from "@/redux/slices/question.slice";
import customizationReducer from "@/redux/slices/customization.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer,
        customization: customizationReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
