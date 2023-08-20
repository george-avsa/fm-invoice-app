import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
    name: 'settings',
    initialState: {
        theme: 'dark',
        modalWrapper: {
            modalForm: false,
            modalAlert: false,
        },
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = (state.theme === 'light') ? 'dark' : 'light'
        },
        toggleFormModal: (state) => {
            state.modalWrapper.modalForm = !state.modalWrapper.modalForm;
        }
    }
});

export const { toggleTheme, toggleFormModal } = settings.actions;