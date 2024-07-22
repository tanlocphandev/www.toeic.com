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
    activeAudioQuestion: null,
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setActiveAudioQuestion: (state, { payload }) => {
            state.activeAudioQuestion = payload;
        },
        setAnswerSelected: (state, { payload: { questionId, answerId } }) => {
            state.answerSelected = { ...state.answerSelected, [questionId]: answerId };
        },
        setPushOrderSelected: (state, { payload }) => {
            const newOrderSelected = new Set([...state.orderSelected, payload]);
            state.orderSelected = [...newOrderSelected];
        },
        reset: () => initialState,
    },
});

export const useQuestionSlice = () => useSelector((state) => state.question);
export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
