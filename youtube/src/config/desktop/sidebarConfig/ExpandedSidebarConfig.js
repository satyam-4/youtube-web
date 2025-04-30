import React from "react"
import { MenuIcon } from "../../../components/icons/MenuIcon.jsx"
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FeedbackIcon from '@mui/icons-material/Feedback'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import { getSubscribedChannels } from "../../../utils/fetchSubscriptions.js"
import { paths } from "../../paths.js"

export const EXPANDED_SIDEBAR_CONFIG = [
    {
        id: "header",
        options: {
            menu: {
                icon: () => React.createElement(MenuIcon),
                action: "TOGGLE_SIDEBAR"
            },
            logo: {
                light: import.meta.env.VITE_DARK_YOUTUBE_LOGO_URL,
                dark: import.meta.env.VITE_LIGHT_YOUTUBE_LOGO_URL,
                link: "/",
                alt: "Youtube logo"
            }
        }
    },
    {
        id: "main",
        options: [
            {
                id: "home",
                label: "Home",
                activeIcon: () => React.createElement(HomeIcon),
                inactiveIcon: () => React.createElement(HomeOutlinedIcon),
                link: paths.home.path
            },
            {
                id: "subscriptions",
                label: "Subscriptions",
                activeIcon: () => React.createElement(SubscriptionsIcon),
                inactiveIcon: () => React.createElement(SubscriptionsOutlinedIcon),
                link: paths.subscriptions.path
            }
        ]
    },
    {
        id: "library",
        options: [
            {
                id: "you",
                label: "You",
                activeIcon: () => React.createElement(KeyboardArrowRightOutlinedIcon),
                inactiveIcon: () => React.createElement(KeyboardArrowRightOutlinedIcon),
                link: paths.you.path
            },
            {
                id: "history",
                label: "History",
                activeIcon: () => React.createElement(HistoryOutlinedIcon),
                inactiveIcon: () => React.createElement(HistoryOutlinedIcon),
                link: paths.history.path
            },
            {
                id: "playlists",
                label: "Playlists",
                activeIcon: () => React.createElement(PlaylistPlayRoundedIcon),
                inactiveIcon: () => React.createElement(PlaylistPlayRoundedIcon),
                link: paths.playlists.path
            },
            {
                id: "watch-later",
                label: "Watch later",
                activeIcon: () => React.createElement(WatchLaterIcon),
                inactiveIcon: () => React.createElement(WatchLaterOutlinedIcon),
                link: paths.watchLater.path
            },
            {
                id: "liked-videos",
                label: "Liked videos",
                activeIcon: () => React.createElement(ThumbUpIcon),
                inactiveIcon: () => React.createElement(ThumbUpOutlinedIcon),
                link: paths.likedVideos.path
            }
        ]
    },
    {
        id: "subscriptions",
        title: "Subscriptions",
        subscriptions: getSubscribedChannels()
    },
    {
        id: "settings_help",
        options: [
            {
                id: "settings",
                label: "Settings",
                activeIcon: () => React.createElement(SettingsIcon),
                inactiveIcon: () => React.createElement(SettingsOutlinedIcon),
                link: paths.settings.path
            },
            {
                id: "feedback",
                label: "Feedback",
                activeIcon: () => React.createElement(FeedbackIcon),
                inactiveIcon: () => React.createElement(FeedbackOutlinedIcon),
                link: paths.feedback.path
            }
        ]
    }
]