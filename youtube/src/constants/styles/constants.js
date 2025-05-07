export const COLLAPSED_SIDEBAR = {
    width: "70px",
    height: "100vh"
}

export const EXPANDED_SIDEBAR = {
    width: "220px",
    height: "100vh"
}

export const NAVBAR = {
    width: `calc(100% - ${COLLAPSED_SIDEBAR.width})`,
    height: "65px"
}

export const MOBILE_NAVBAR = {
    width: "100vw",
    height: "56px"
}

export const OUTLET = {
    width: `calc(100% - ${COLLAPSED_SIDEBAR.width}) xl:calc()`
}