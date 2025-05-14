import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/getuser"
import layoutSlice from "./slices/getlayout"
const store=configureStore({
    reducer:{
        getuser:userSlice,
        layout:layoutSlice
    }
})

export default store