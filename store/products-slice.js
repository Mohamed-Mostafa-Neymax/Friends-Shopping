import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    products: [],
    cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    cartIsShown: false
}

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {

        toggleShowingCart: function(state, action) {
            state.cartIsShown = !state.cartIsShown;
        },

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
            console.log('productIndex', productIndex);
            state.cart.totalQuantity--;
            state.cart.totalPrice -= state.cart.products[productIndex].price;
            if( (productIndex !== -1 && state.cart.products[productIndex].quantity === 1) || action.payload.entirely ) 
                state.cart.products.splice(productIndex, 1);
            else if( productIndex !== -1 && state.cart.products[productIndex].quantity > 1 ) 
                state.cart.products[productIndex].quantity--;
        },

        getProducts: function(state, action) {
            state.products = action.payload;
        },

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