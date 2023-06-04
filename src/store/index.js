import { formSlice } from "./form";
import { invoiceListSlice } from "./invoices";
import { settings } from "./settings";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    form: formSlice.reducer,
    invoiceList: invoiceListSlice.reducer,
    settings: settings.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools:true,
})