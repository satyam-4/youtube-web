import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isExpanded: localStorage.getItem("isExpanded") === "true",  // Tracks sidebar state
    studioSidebar: true
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleYoutubeSidebar: (state) => {
            state.isExpanded = !state.isExpanded
        },
        toggleStudioSidebar: (state) => {
            state.studioSidebar = !state.studioSidebar
        },
        setSidebarState: (state, action) => {
            state.isExpanded = action.payload
        }
    }
})

export const { toggleYoutubeSidebar, toggleStudioSidebar, setSidebarState } = sidebarSlice.actions
export default sidebarSlice.reducer