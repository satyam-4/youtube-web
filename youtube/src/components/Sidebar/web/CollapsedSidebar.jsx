// import React from "react"
// import { toggleSidebarState } from "../../../features/sidebar/sidebarSlice"
// import { useDispatch } from "react-redux"
// import MenuIcon from '@mui/icons-material/Menu'
// import HomeIcon from '@mui/icons-material/Home'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
// import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
// import CollapsedSidebarItem from "../CollapsedSidebarItem"

// const CollapsedSidebar = () => {
//     const dispatch = useDispatch()

//     return (
//         <>
//             <div className="w-[max(80px, 10vw)] h-[100vh] flex justify-center bg-transparent text-white">
//                 <ul className="w-full px-1">
//                     <li className="h-[60px] flex justify-center">
//                         <button
//                         onClick={() => dispatch(toggleSidebarState())}>
//                             <MenuIcon />
//                         </button>
//                     </li>
                    
//                     <CollapsedSidebarItem
//                     to={"/"}
//                     activeIcon={<HomeIcon style={{ fontSize: "3vw" }} />}
//                     inactiveIcon={<HomeOutlinedIcon style={{ fontSize: "3vw" }} />}
//                     label={"Home"} />

//                     <CollapsedSidebarItem
//                     to={"/subscriptions"}
//                     activeIcon={<SubscriptionsIcon style={{ fontSize: "3vw" }} />}
//                     inactiveIcon={<SubscriptionsOutlinedIcon style={{ fontSize: "3vw" }} />}
//                     label={"Subscriptions"} />

//                     <CollapsedSidebarItem
//                     to={"/you"}
//                     activeIcon={<AccountCircleIcon style={{ fontSize: "3vw" }} />}
//                     inactiveIcon={<AccountCircleOutlinedIcon style={{ fontSize: "3vw" }} />}
//                     label={"You"} />
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default CollapsedSidebar