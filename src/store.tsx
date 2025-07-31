import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {

    }
})

//typescript 때 이 두줄 필요
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
