const { configureStore, createSlice, combineReducers, createAsyncThunk } = require("@reduxjs/toolkit");

const now = new Date();
const monthDate = new Date(now.getFullYear(), now.getMonth(), 1);
// const monthDate = new Date(now.getFullYear(), 0, 1);

const initialState = {
    monthDate,
    datePicked: new Date(),
}

export const fetchInvoices = createAsyncThunk(
    'invoiceList/fetchInvoices',
    async () => {
        const res = await fetch('http://localhost:3001/api/invoices')
        const data = await res.json();
        return data;
    }
)

const formSlice = createSlice({
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

const invoiceListSlice = createSlice({
    name: 'invoiceList',
    initialState: [],
    reducers: {
        addInvoice: (state, {payload}) => state.push(payload)
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
        .addCase(fetchInvoices.fulfilled, (state, action) => {
          return action.payload;
        })
        .addCase(fetchInvoices.pending, (state, action) => {
            console.log('pending..');
        })
        .addCase(fetchInvoices.rejected, (state, action) => {
            console.log('rejected!!!');
        })
      },
})

const rootReducer = combineReducers({
    form: formSlice.reducer,
    invoiceList: invoiceListSlice.reducer,
});

export const { decrementMonth, inrementMonth, pickDate} = formSlice.actions;
 
export const store = configureStore({
    reducer: rootReducer,
    devTools:true,
})