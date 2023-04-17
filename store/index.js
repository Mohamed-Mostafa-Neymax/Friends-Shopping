import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';

import productsReducer from './products-slice';

const store = () => configureStore({
    reducer: {
        products: productsReducer
    }
})
const storeWrapper = createWrapper(store);

export default storeWrapper;