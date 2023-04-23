const { configureStore, createSlice, combineReducers } = require("@reduxjs/toolkit");

const now = new Date();
const monthDate = new Date(now.getFullYear(), now.getMonth(), 1);
// const monthDate = new Date(now.getFullYear(), 0, 1);

const initialState = {
    monthDate,
    datePicked: new Date(),
}

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
    }
});

const rootReducer = combineReducers({
    form: formSlice.reducer,
});

export const { decrementMonth, inrementMonth, pickDate} = formSlice.actions;
 
export const store = configureStore({
    reducer: rootReducer,
    devTools:true,
})