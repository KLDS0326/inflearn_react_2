import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";


const store = configureStore({
    reducer: {
        "loginSlice" : loginSlice

    }
})

//typescript 때 이 두줄 필요
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
