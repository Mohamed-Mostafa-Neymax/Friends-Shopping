import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    products: [],
    cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    cartIsShown: false,
    gridActivated: true
}

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        addProductToCart: function(state, action) {
            const product = state.products.find(product => product.id === action.payload);
            const productIndex = state.cart.products.findIndex(product => product.id === action.payload);
            state.cart.totalQuantity++;
            state.cart.totalPrice += product.price;
            if( productIndex === -1 ) state.cart.products.push({...product, quantity: 1});
            else state.cart.products[productIndex].quantity++;
        },

        removeProductFromCart: function(state, action) {
            const productIndex = state.cart.products.findIndex(product => product.id === action.payload.id);
            if( action.payload.entirely ) {
                state.cart.totalPrice -= state.cart.products[productIndex].price * state.cart.products[productIndex].quantity;
                state.cart.totalQuantity -= state.cart.products[productIndex].quantity;
                state.cart.products.splice(productIndex, 1);
            } else if( productIndex !== -1 && state.cart.products[productIndex].quantity > 1 ) {
                state.cart.totalPrice -= state.cart.products[productIndex].price;
                state.cart.products[productIndex].quantity--;
                state.cart.totalQuantity--;
            }
        },

        toggleShowingCart: function(state) { state.cartIsShown = !state.cartIsShown; },
        getProducts: function(state, action) { state.products = action.payload; },
        activateGrid: function(state) { state.gridActivated = true; },
        deactivateGrid: function(state) { state.gridActivated = false; },

        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth,
                };
            },
        },
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;