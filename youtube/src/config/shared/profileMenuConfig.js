import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DoneIcon from '@mui/icons-material/Done'

export const MENU_ITEMS = [
    {
        id: "auth-section",
        options: [
            {
                id: "signOut",
                label: "Sign out",
                icon: React.createElement(LogoutIcon),
                action: "logout_user"
            }
        ]
    },
    {
        id: "profile-section",
        options: [
            {
                id: "appearance",
                label: "Appearance",
                icon: React.createElement(ModeNightOutlinedIcon),
                forwardIcon: React.createElement(ArrowForwardIosIcon, { 
                    style: { fontSize: 20, color: 'gray'}
                }),
                action: "open_appearance_menu",
                subOptions: [
                    {
                        id: "back",
                        label: "Appearance",
                        icon: React.createElement(ArrowBackIcon),
                        action: "back_to_main_menu",
                        selectIcon: React.createElement(DoneIcon)
                    },
                    {
                        id: "device",
                        label: "Use device theme",
                        action: "set_device_theme",
                        selectIcon: React.createElement(DoneIcon)
                    },
                    {
                        id: "dark",
                        label: "Dark theme",
                        action: "set_dark_theme",
                        selectIcon: React.createElement(DoneIcon)
                    },
                    {
                        id: "light",
                        label: "Light theme",
                        action: "set_light_theme",
                        selectIcon: React.createElement(DoneIcon)
                    }

                ]
            },
            {
                id: "shortcuts",
                label: "Keyboard shortcuts",
                icon: React.createElement(KeyboardAltOutlinedIcon),
                action: "show_keyboard_sortcuts"
            }
        ]
    },
    {
        id: "setting-section",
        options: [
            {
                id: "settings",
                label: "Settings",
                icon: React.createElement(SettingsOutlinedIcon),
                action: "navigate_to_settings"
            },
            {
                id: "feedback",
                label: "Feedback",
                icon: React.createElement(FeedbackOutlinedIcon),
                action: "navigate_to_feedback"
            }
        ]
    }
]