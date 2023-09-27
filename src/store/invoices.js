import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBrowserHistory } from 'history';
import { redirect } from "react-router-dom";
import { setRedirect, successEdit, toggleModalPrompt } from "./settings";
export const browserHistory = createBrowserHistory();

export const fetchInvoices = createAsyncThunk(
    'invoiceList/fetchInvoices',
    async () => {
        const res = await fetch('http://localhost:3001/api/invoices');
        const data = await res.json();
        return data;
    }
)

export const updateStatus = createAsyncThunk(
    'invoiceList/updateStatus',
    async (payload, {dispatch}) => {
        return fetch('http://localhost:3001/api/invoice/status', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: payload.id,
                status: payload.status,
            })
        })
            .then(response => response.json())
            .then(data => {
                return data
            })
            .catch(e => {throw new Error(e)})
    }
)

export const addInvoice = createAsyncThunk(
    'invoiceList/addInvoice',
    async (payload, {dispatch, getState}) => {
        const toAdd = {...getState().form};

        delete toAdd._id;
        delete toAdd.datePicked;
        delete toAdd.dropdowns;
        delete toAdd.monthDate;
        delete toAdd.savingStatus;


        return fetch('http://localhost:3001/api/invoice/create/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toAdd)
        })
    }
);

export const deleteInvoice = createAsyncThunk(
    'invoiceList/deleteInvoice',
    async (payload, {dispatch, getState}) => {
        return fetch('http://localhost:3001/api/invoice/delete', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: payload})
        })
            .then(response => response.json())
            .then(data => {
                dispatch(setRedirect())
                dispatch(toggleModalPrompt())
                return data
            })
    }
)

export const invoiceListSlice = createSlice({
    name: 'invoiceList',
    initialState: [],
    reducers: {
        addInvoice: (state, {payload}) => state.push(payload),
        updateInvoice: (state, {payload}) => {
            return state.map(invoice => {
                if (invoice.id === payload.id) {
                    return payload;
                }
                return invoice;
            })
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchInvoices.fulfilled, (state, action) => {
            // console.log(action.payload)
          return action.payload;
        })
        .addCase(fetchInvoices.pending, (state, action) => {
            console.log('pending..');
        })
        .addCase(fetchInvoices.rejected, (state, action) => {
            console.log('rejected!!!');
        })
        .addCase(updateStatus.fulfilled, (state, payload) => {
            return state.map(invoice => {
                if (invoice.id === payload.meta.arg.id) {
                    return {...invoice, status: payload.meta.arg.status}
                }
                return invoice
            })
        })
        .addCase(deleteInvoice.fulfilled, (state, payload) => {
            redirect('/');
            return state;
            // return state.filter(invoice => invoice.id !== payload);
        })
      },
});

export const {updateInvoice, changeStatus} = invoiceListSlice.actions;