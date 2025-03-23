import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice.js"
import userReducer from "../features/user/userSlice.js"
import sidebarReducer from "../features/sidebar/sidebarSlice.js"
import preferenceReducer from "../features/preferences/themeSlice.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        sidebar: sidebarReducer,
        preferance: preferenceReducer,
    }
})

export default store