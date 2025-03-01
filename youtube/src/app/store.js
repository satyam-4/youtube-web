import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice.js"
import userReducer from "../features/user/userSlice.js"
import sidebarReducer from "../features/sidebar/sidebarSlice.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        sidebar: sidebarReducer
    }
})

export default store