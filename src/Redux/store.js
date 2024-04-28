import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./Reducers/authSlices"

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})