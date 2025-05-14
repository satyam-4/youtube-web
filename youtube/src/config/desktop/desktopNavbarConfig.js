import React from "react"
import SignIn from "../../components/button/SignIn.jsx"
import AddIcon from '@mui/icons-material/Add'
import MicIcon from '@mui/icons-material/Mic'
import { NotificationsOutlined, Notifications } from "../../components/icons/NotificationIcon.jsx"
import defaultAvatar from "../../assets/images/avatars/defaultAvatar.svg"
import ClearIcon from '@mui/icons-material/Clear'
import { SearchIcon } from "../../components/icons/SearchIcon.jsx"

export const DESKTOP_NAVBAR_CONFIG = {
    logo: {
        light: import.meta.env.VITE_DARK_YOUTUBE_LOGO_URL,
        dark: import.meta.env.VITE_LIGHT_YOUTUBE_LOGO_URL,
        link: "/",
        alt: "Youtube logo"
    },  
    searchbar: {
        placeholder: "Search",
        searchInput: {
            placeholder: "Search",
            type: "text",
            className: `
            h-full px-2 rounded-l-3xl outline-none border border-transparent focus:border-sky-700
            w-[82%] lg:w-[90%] md:px-5  
            `
        },
        buttons: {
            cross: {
                id: "cross",
                type: "button",
                icon: () => React.createElement(ClearIcon),
                className: "absolute left-[75%] lg:left-[85%] text-lightWhite",
                action: () => console.log("cross button clicked")
            },
            search: {
                id: "search",
                type: "button",
                icon: () => React.createElement(SearchIcon),
                className: "h-full flex-grow rounded-r-3xl flex justify-center items-center",
                action: () => console.log("search button is clicked")
            },
            mic: {
                id: "mic",
                type: "button",
                icon: () => React.createElement(MicIcon),
                className: "p-2 rounded-full",
                action: () => console.log("mic button is clicked")
            }
        }
    },
    authenticated: {
        buttons: [
            {
                id: "create",
                type: "button",
                label: "Create",
                activeIcon: () => React.createElement(AddIcon),
                inactiveIcon: () => React.createElement(AddIcon),
                className: "px-[14px] py-[7px] rounded-3xl flex justify-center items-center gap-0.5",
                action: () => console.log("create clicked")
            },
            {
                id: "notification",
                type: "button",
                activeIcon: () => React.createElement(NotificationsOutlined),
                inactiveIcon: () => React.createElement(Notifications),
                className: "relative ",
                badge: 5,
                action: () => console.log("notification clicked")
            },
            {
                id: "profile",
                type: "button",
                className: "w-9 h-9 rounded-full",
                action: "TOGGLE_USER_MENU_STATE"
            }
        ]
    },
    unauthenticated: {
        buttons: [
            {
                id: "signIn",
                type: "component",
                signIn: (path) => React.createElement(SignIn, {currentPath: path})
            }
        ]
    }
}