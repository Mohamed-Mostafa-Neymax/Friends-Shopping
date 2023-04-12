import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    stateIsWorking: 0
}

const testSlice = createSlice({
    name: 'Testing',
    initialState,
    reducers: {
        toggleState: state => void(state.stateIsWorking++),
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload,
                };
            },
        },
    }
});

export const testActions = testSlice.actions;
export default testSlice.reducer;