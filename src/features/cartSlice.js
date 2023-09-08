import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    // total: #,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        }
    },
    extraReducers: (builder) => {}
})

export default cartSlice.reducer;
