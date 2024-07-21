import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    /* 
    answerSelected = {
        [questionId]: answerId
    }
    */
    answerSelected: null,
    // [order] => [1, 2, 3, 4, ...]
    orderSelected: [],
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setAnswerSelected: (state, { payload: { questionId, answerId } }) => {
            state.answerSelected = { ...state.answerSelected, [questionId]: answerId };
        },
        setPushOrderSelected: (state, { payload }) => {
            const newOrderSelected = new Set([...state.orderSelected, payload]);
            state.orderSelected = [...newOrderSelected];
        },
    },
});

export const useQuestionSlice = () => useSelector((state) => state.question);
export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
