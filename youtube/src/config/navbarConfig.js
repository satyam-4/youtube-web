import React from "react"
import MicIcon from "@mui/icons-material/Mic"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import AddIcon from '@mui/icons-material/Add'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import getTheme from "../services/theme/getTheme.js"

const theme = getTheme()

console.log(theme)
export const NAVBAR_CONFIG = {
    logo: {
        light: import.meta.env.VITE_DARK_YOUTUBE_LOGO_URL,
        dark: import.meta.env.VITE_LIGHT_YOUTUBE_LOGO_URL,
        link: "/"
    },
    buttons: [
        {
            id: "create",
            label: "Create",
            activeIcon: () => React.createElement(AddIcon),
            inactiveIcon: () => React.createElement(AddIcon),
            className: "px-[14px] py-[7px] rounded-3xl flex justify-center items-center gap-0.5",
            action: () => console.log("create clicked")
        },
        {
            id: "notification",
            activeIcon: () => React.createElement(NotificationsOutlinedIcon),
            inactiveIcon: () => React.createElement(NotificationsIcon),
            className: "relative",
            badge: 5,
            action: () => console.log("notification clicked")
        }
    ],
    searchBar: {
        placeholder: "Search",
        micIcon: () => React.createElement(MicIcon)
    },
    auth: {
        loggedOut: {
            label: "Sign in",
            icon: React.createElement(AccountCircleOutlinedIcon)
        }
    }
}