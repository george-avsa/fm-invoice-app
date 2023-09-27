import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { hideSuccessEdit, showSuccessEdit, toggleFormModal } from "./settings";
import qs from 'qs';
import { updateInvoice } from "./invoices";

const now = new Date();
const monthDate = new Date(now.getFullYear(), now.getMonth(), 1);

export const doSomethingAsync = createAsyncThunk(
    "formSlice/loadItemData",
    async (payload, { getState, dispatch }) => {
        const rootState = getState();
        const toEdit = rootState.invoiceList.find(item => item.id === payload);
        dispatch(fillFormWithItem(toEdit));
    }
);

export const saveEditedData = createAsyncThunk(
    "formSlice/savingEdited",
    async (payload, {getState, dispatch}) => {
        const toEdit = {...getState().form};
        delete toEdit._id;
        delete toEdit.datePicked;
        delete toEdit.dropdowns;
        delete toEdit.monthDate;
        delete toEdit.savingStatus;
        
        return fetch('http://localhost:3001/api/invoice/edit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toEdit),
        }).then(response => response.json()).then(data => {
            if (data.modifiedCount > 0) {
                dispatch(toggleFormModal());
                dispatch(showSuccessEdit());
                dispatch(updateInvoice(toEdit));
                return data;
            }
        });
    }
);

function getTotal(item, payload) {
    let total = '';
    if (payload.type === 'price' || payload.type === 'quantity') {
        if (item.quantity && item.price) {
            let quantityNumber = Number.parseInt(item.quantity);
            let priceNumber = Number.parseFloat(item.price);
            if (payload.type === 'price' && !!item.quantity) {
                priceNumber = !!payload.value ? payload.value : 0;
            } else if (payload.type === 'quantity' && !!item.price) {
                quantityNumber = !!payload.value ? Number.parseFloat(payload.value) : 0;
            }
            total = USDollar.format(priceNumber * quantityNumber);
        }
    }

    return total;
}

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
});

const itemTemplate = {
    id: nanoid(),
    name: '',
    quantity: '',
    price: '',
    total: '',
};

const initialState = {
    type: 'creation',
    billFrom: {
        street: '',
        city: '',
        postCode: '',
        country: '',
    },
    billTo: {
        fullname: '',
        street: '',
        email: '',
        city: '',
        postCode: '',
        country: '',
    },
    paymentTerms: '',
    description: '',
    items: [
        itemTemplate
    ],
    monthDate,
    datePicked: new Date(),
    dropdowns: {
        datepicker: false,
        select: false,
    },
    savingStatus: 'unsaved', // unsaved | loading | saved | failed
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addItem: (state) => {
            const newItem = {...itemTemplate};
            newItem.id = nanoid();
            state.items = [...state.items, newItem];
        },
        deleteItem: (state, {payload}) => {
            const newItems = state.items.filter(item => {
                if (item.id === payload) {
                    return false
                }
                return true
            })
            if (!newItems.length) {
                const newItem = {...itemTemplate};
                newItem.id = nanoid();
                state.items = [newItem];
            } else {
                state.items = newItems;
            }
        },
        changeItemField: (state, {payload}) => {
            state.items = state.items.map(item => {
                if (item.id === payload.id) {
                    item[payload.type] = payload.value;
                    if (payload.type === 'price' || payload.type === 'quantity') {
                        item.total = getTotal(item, payload)
                    }
                }
                return item
            });
        },
        changeField: (state, {payload}) => {
            console.log(payload.type.split('|'))
            const [type, field] = payload.type.split('|');
            if (!!field) {
                state[type][field] = payload.value;
            } else {
                state[type] = payload.value;
            }
        },
        fillFormWithItem: (state, {payload}) => {
            return {
                ...payload, 
                monthDate: state.monthDate,
                datePicked: new Date(payload.createdAt),
                dropdowns: state.dropdowns,
                savingStatus: state.savingStatus,
                items: payload.items.map(item => ({...item, id: nanoid()}))
            };
        },
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
            return {
                ...state,
                dropdowns: {
                    ...state.dropdowns,
                    datepicker: false
                },
                datePicked: action.payload
            }
            state.dropdowns.datepicker = false;
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
        },
        setInitialState: (state, {payload}) => {
            return initialState;
        },
    },
    extraReducers : (builder) => {
        builder
            .addCase(saveEditedData.fulfilled, (state, {payload}) => {
                if (payload.modifiedCount > 0) {
                    return initialState;
                } else {
                    state.savingStatus = 'failed';
                }
            })
        builder
            .addCase(saveEditedData.pending, (state, action) => {
                state.savingStatus = 'loading';
            })
        builder
            .addCase(saveEditedData.rejected, (state, action) => {
                state.savingStatus = 'failed';
            })
    }
});

export const { 
    fillFormWithItem, 
    addItem, 
    deleteItem, 
    decrementMonth, 
    inrementMonth, 
    pickDate,
    closeDatepicker, 
    openDatepicker, 
    openSelect, 
    closeSelect, 
    changeItemField,
    changeField,
    setInitialState,
} = formSlice.actions;