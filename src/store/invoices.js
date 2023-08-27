import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchInvoices = createAsyncThunk(
    'invoiceList/fetchInvoices',
    async () => {
        const res = await fetch('http://localhost:3001/api/invoices');
        const data = await res.json();
        return data;
    }
)

export const invoiceListSlice = createSlice({
    name: 'invoiceList',
    initialState: [],
    reducers: {
        addInvoice: (state, {payload}) => state.push(payload)
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
      },
});
