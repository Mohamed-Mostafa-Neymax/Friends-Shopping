import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import TestReducer from './test-slice';

const store = () => configureStore({
    reducer: {
        'theTest': TestReducer
    }
})
const storeWrapper = createWrapper(store);

export default storeWrapper;