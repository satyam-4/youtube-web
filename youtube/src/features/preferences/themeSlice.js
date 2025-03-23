import { createSlice } from "@rectjs/toolkit"

// Detecting system theme preference
const systemPrefersDark = window.matchMedia("(prefer-color-scheme: dark)").matches
const savedTheme = localStorage.getItem("theme") || (systemPrefersDark ? "dark" : "light")

const initialState = {
    theme: savedTheme
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.theme)
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducers