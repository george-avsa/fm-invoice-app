import { createSlice } from "@reduxjs/toolkit";

const now = new Date();
const monthDate = new Date(now.getFullYear(), now.getMonth(), 1);

const initialState = {
    monthDate,
    datePicked: new Date(),
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        decrementMonth: (state) => {
            const monthDate = new Date(state.monthDate);
            const monthToSet = monthDate.getMonth() - 1;
            return {...state, monthDate: new Date(monthDate.setMonth(monthToSet))};
        },
        inrementMonth: (state) => {
            const monthDate = new Date(state.monthDate);
            const monthToSet = monthDate.getMonth() + 1;
            return {...state, monthDate: new Date(monthDate.setMonth(monthToSet))};
        },
        pickDate: (state, action) => {
            console.log(action.payload)
            state.datePicked = action.payload;
        }
    },
});

export const { decrementMonth, inrementMonth, pickDate} = formSlice.actions;