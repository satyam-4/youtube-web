import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,  // Tracks authentication status
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true
        },
        logoutSuccess: (state) => {
            state.isAuthenticated = false
        },
    }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions
export default authSlice.reducer