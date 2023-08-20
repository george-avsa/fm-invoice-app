import { createSlice } from "@reduxjs/toolkit";

const now = new Date();
const monthDate = new Date(now.getFullYear(), now.getMonth(), 1);

const initialState = {
    monthDate,
    datePicked: new Date(),
    dropdowns: {
        datepicker: false,
        select: false,
    }
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
            state.datePicked = action.payload;
        },
        closeDatepicker: (state) => {
            state.dropdowns.datepicker = false; 
        },
        openDatepicker: (state) => {
            state.dropdowns.datepicker = true; 
        },
        closeSelect: (state) => {
            state.dropdowns.select = false; 
        },
        openSelect: (state) => {
            state.dropdowns.select = true; 
        }
    },
});

export const { decrementMonth, inrementMonth, pickDate, closeDatepicker, openDatepicker, openSelect, closeSelect} = formSlice.actions;