import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentExpresstion: '',
    history: [],
    resuilt: 0,
}

export const expresstionSlice = createSlice({
    name: 'expresstion',
    initialState,
    reducers: {
        ADD_NUMBER: (state, action) => {
            state.currentExpresstion += action.payload
        },
        ADD_OPERATION: (state, action) => {
            const operationCheck = state.currentExpresstion.slice(-1) === '-'
                || state.currentExpresstion.slice(-1) === '+'
                || state.currentExpresstion.slice(-1) === '*'
                || state.currentExpresstion.slice(-1) === '/'
            if (operationCheck) {
                return
            } else {
                state.currentExpresstion += action.payload
            }
        },
        RESTORE_EXPRESSTION: (state, action) => {
            if (action.payload === 'AC') {
                state.currentExpresstion = '';
                state.resuilt = 0;
            } else if (action.payload === 'C') {
                state.currentExpresstion = state.currentExpresstion.substring(0, state.currentExpresstion.length - 1)
                if (state.currentExpresstion.length === 0) {
                    state.resuilt = 0;
                }
            } else if (action.payload === '=') {
                state.resuilt = eval(state.currentExpresstion);
            }
        },
        ADD_HISTORY: (state) => {
            state.history.push(`${state.currentExpresstion} = ${state.resuilt}`)
        },
        ADD_ONCHANGE_INPUT: (state, action) => {
            state.currentExpresstion = action.payload
        }
    }
})

export default expresstionSlice.reducer
