import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    openNote: false,
};

const customizationSlice = createSlice({
    name: "customization",
    initialState,
    reducers: {
        setOpenNote: (state, action) => {
            state.openNote = action.payload;
        },
    },
});

export const useCustomizationSlice = () => useSelector((state) => state.customization);
export const customizationActions = customizationSlice.actions;
export default customizationSlice.reducer;
