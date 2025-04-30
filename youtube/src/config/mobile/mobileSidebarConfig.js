import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import AddIcon from '@mui/icons-material/Add'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { paths } from '../paths.js'

export const MOBILE_SIDEBAR_CONFIG = [
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
        id: "create",
        label: "",
        activeIcon: () => React.createElement(AddIcon),
        inactiveIcon: () => React.createElement(AddIcon),
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
        id: "you",
        label: "You",
        activeIcon: () => React.createElement(AccountCircleIcon),
        inactiveIcon: () => React.createElement(AccountCircleOutlinedIcon),
        link: paths.you.path
    }
]