import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import cartSlice from "./slices/cartSlice";


const store = configureStore({
    reducer: {
        "loginSlice" : loginSlice,
        "cartSlice" :cartSlice
    }
})

//typescript 때 이 두줄 필요
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
