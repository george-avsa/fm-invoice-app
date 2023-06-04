import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
    name: 'settings',
    initialState: {
        theme: 'light',
        modalWrapper: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = (state.theme === 'light') ? 'dark' : 'light'
        },
        toggleModalWrapper: (state) => {
            state.modalWrapper = !state.modalWrapper
        }
    }
});

export const { toggleTheme, toggleModalWrapper } = settings.actions;