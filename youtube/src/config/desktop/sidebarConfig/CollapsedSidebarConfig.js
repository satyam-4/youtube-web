import React from 'react'
import { MenuIcon } from "../../../components/icons/MenuIcon.jsx"
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { paths } from '../../paths.js'

export const COLLAPSED_SIDEBAR_CONFIG = [
    {
        id: "menu",
        icon: () => React.createElement(MenuIcon),
        action: "TOGGLE_SIDEBAR"
    },
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
    },
    {
        id: "you",
        label: "You",
        activeIcon: () => React.createElement(AccountCircleIcon),
        inactiveIcon: () => React.createElement(AccountCircleOutlinedIcon),
        link: paths.you.path
    }
]