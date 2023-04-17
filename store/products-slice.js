import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    products: [],
    cart: {
        products: [
            {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                rating: { "rate": 3.9, "count": 120 },
                quantity: 0
            }
        ],
        totalQuantity: 0,
        totalPrice: 0
    }
}

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        addProductToCart: function(state, action) {
            const idIfExisted = state.cart.products.find(product => product.id === action.payload);
            if( idIfExisted ) {
                
            }
            state.quantity += action.payload;
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