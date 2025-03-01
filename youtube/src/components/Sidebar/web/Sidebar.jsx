// import React from "react"
// import { useSelector } from "react-redux"
// import ExpandedSidebar from "./ExpandedSidebar"
// import CollapsedSidebar from "./CollapsedSidebar"

// const Sidebar = ({ isSetting }) => {
//     const sidebarState = useSelector((state) => state.sidebar.isExpanded)

//     return (
//         <>
//             {
//                 isSetting ? (
//                     sidebarState ? (
//                         <ExpandedSidebar />
//                     ) : (
//                         ""
//                     )
//                 ) : (
//                     sidebarState ? (
//                         <ExpandedSidebar />
//                     ) : (
//                         <CollapsedSidebar />
//                     )
//                 )
//             }
//         </>
//     )
// }

// export default Sidebar