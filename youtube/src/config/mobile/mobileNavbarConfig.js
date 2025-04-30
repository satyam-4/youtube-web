import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { SearchIcon } from "../../components/icons/SearchIcon.jsx"

export const MOBILE_NAVBAR_CONFIG = {
    logo: {
        light: import.meta.env.VITE_DARK_YOUTUBE_LOGO_URL,
        dark: import.meta.env.VITE_LIGHT_YOUTUBE_LOGO_URL,
        link: "/",
        alt: "Youtube logo"
    },
    buttons: [
        {
            id: "notification",
            activeIcon: () => React.createElement(NotificationsOutlinedIcon),
            inactiveIcon: () => React.createElement(NotificationsIcon),
            className: "relative",
            badge: 5,
            action: () => console.log("notification clicked")
        },
        {
            id: "search",
            activeIcon: () => React.createElement(SearchIcon),
            inactiveIcon: () => React.createElement(SearchIcon),
            className: "",
            action: () => console.log("search clicked")
        }
    ]
}