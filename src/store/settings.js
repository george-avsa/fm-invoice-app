import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
    name: 'settings',
    initialState: {
        theme: 'dark',
        modalWrapper: {
            modalForm: false,
            modalAlert: false,
            modalPrompt: false,
        },
        successEdit: false,
        redirect: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = (state.theme === 'light') ? 'dark' : 'light'
        },
        toggleFormModal: (state) => {
            state.modalWrapper.modalForm = !state.modalWrapper.modalForm;
        },
        toggleModalPrompt: (state) => {
            state.modalWrapper.modalPrompt = !state.modalWrapper.modalPrompt;
        },
        closeModalPrompt: (state) => {
            state.modalWrapper.modalPrompt = false;
        },
        setRedirect: (state) => {
            state.redirect = !state.redirect;
        },
        stopRedirect:(state) => {
            state.redirect = false;
        },
        showSuccessEdit:(state) => {
            state.successEdit = true;
        },
        hideSuccessEdit:(state) => {
            state.successEdit = false;
        }
    }
});

export const { toggleTheme, toggleFormModal, toggleModalPrompt, setRedirect, stopRedirect, closeModalPrompt, showSuccessEdit, hideSuccessEdit } = settings.actions;