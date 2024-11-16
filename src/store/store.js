import { configureStore } from "@reduxjs/toolkit";
import { cartCountReducer } from "./cartCountReducer";

export const store = configureStore({
    reducer: {
        cartCountReducer: cartCountReducer,
    }
})
