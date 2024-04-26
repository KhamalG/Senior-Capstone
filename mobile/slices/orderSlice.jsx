import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    status: 'preparing',
    total: 0
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    emptyOrder: (state, action) => {
        state.items = [];
        state.total = 0;
        state.status = '';
    },
    setOrderStatus: (state, action) => {
        state.status = action.payload;
    },
    setOrderTotal: (state, action) => {
        state.total = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToOrder, emptyOrder, setOrderStatus, setOrderTotal } = orderSlice.actions;

export const selectOrderItems = state => state.order.items;
export const selectOrderStatus = state => state.order.status;

export const selectOrderItemsById = (state, id) => state.order.items.filter(item => item.id == id);

export const selectOrderTotal = state => state.order.total;

export default orderSlice.reducer