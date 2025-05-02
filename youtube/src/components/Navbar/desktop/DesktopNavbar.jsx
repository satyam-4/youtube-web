import { Link } from "react-router-dom"
import { DESKTOP_NAVBAR_CONFIG } from "../../../config/desktop/desktopNavbarConfig.js"
import { useEffect, useMemo, useRef, useState } from "react"
import { NAVBAR } from "../../../constants/styles/constants.js"
import { createHandlers } from "../../../utils/handlers/navbarHandlers.js"
import ProfileMenu from "../../popups/ProfileMenu.jsx"
import { useTheme } from "../../../contexts/ThemeContext.jsx"

const DesktopNavbar = () => {
    const [authState, setAuthState] = useState(true)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [search, setSearch] = useState("")
    
    const inputRef = useRef(null)
    const profileRef = useRef(null)
    const profileButtonRef = useRef(null)

    const { theme } = useTheme()
    
    const searchBarHeight = "43px"

    const renderSearchBar = () => (
        <div className={`
            hidden
            md:flex items-center w-[45vw] lg:w-[50vw] gap-2
        `}>
            <div className={`
                relative p-[1px] mx-auto w-full h-[${searchBarHeight}] flex items-center rounded-3xl overflow-hidden
                ${theme === "light" ? 'bg-[#dad9d982]' : 'bg-[#39393982]'}
            `}>
                <input 
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type={DESKTOP_NAVBAR_CONFIG.searchbar.searchInput.type}
                placeholder={DESKTOP_NAVBAR_CONFIG.searchbar.searchInput.placeholder}
                className={`${DESKTOP_NAVBAR_CONFIG.searchbar.searchInput.className} ${theme === "light" ? "bg-white" : "bg-dark"}`} />
                {
                    search && (
                        <button
                        className={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.cross.className}
                        onClick={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.cross.action()}>
                            {   
                                DESKTOP_NAVBAR_CONFIG.searchbar.buttons.cross.icon()
                            }
                        </button>
                    )
                }
                <button
                className={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.search.className}
                onClick={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.search.action()}>
                    {
                        DESKTOP_NAVBAR_CONFIG.searchbar.buttons.search.icon()
                    }
                </button>
            </div>
            <button
            className={`${DESKTOP_NAVBAR_CONFIG.searchbar.buttons.mic.className} ${theme === "light" ? 'bg-[#dad9d982] hover:bg-[#dad9d9]' : 'bg-[#39393982] hover:bg-[#393939c7]'}`}
            onClick={DESKTOP_NAVBAR_CONFIG.searchbar.buttons.mic.action()}>
                {
                    DESKTOP_NAVBAR_CONFIG.searchbar.buttons.mic.icon()
                }
            </button>
        </div>
    )

    const renderNavbarButtons = () => {
        if(authState) {
            return DESKTOP_NAVBAR_CONFIG.authenticated.buttons.map((button) => {
                return (
                    <button
                    ref={button.id === "profile" ? profileButtonRef : null}
                    key={button.id}
                    id={button.id}
                    className={
                        button.id === "create"
                        ? `${button.className} ${theme === "light" ? 'bg-[#dad9d982] hover:bg-[#dad9d9]' : 'bg-[#39393982] hover:bg-[#393939c7]'}`
                        : `${button.className}`
                    }
                    onClick={() => handleNavbarButtonClick(button.action)}>
                        { 
                            button.id === "profile"
                            ? (
                                button.defaultProfilePic()
                            ) 
                            : (
                                button.activeIcon()
                            )
                        }
                        { 
                            button.label && (
                                <p className="font-semibold">
                                    { button.label }
                                </p>
                            )
                        }
                        {
                            button.badge && (
                                <span className="w-[1.2rem] h-[1.2rem] text-white absolute top-0 right-0 -translate-y-2 flex items-center justify-center text-[0.85rem] bg-red-600 rounded-full">
                                    { button.badge }
                                </span>
                            )
                        }
                    </button>
                )
            })
        } else {
            DESKTOP_NAVBAR_CONFIG.unauthenticated.buttons.map((button) => {
                return (
                    button.type === "component" 
                    ? (
                        button.signIn
                    )
                    : (
                        ''
                    )
                )
            })
        }
    }

    const handleNavbarButtonClick = (action) => {
        if(action === "TOGGLE_USER_MENU_STATE") {
            setIsProfileOpen(prev => !prev)
        }
    }
    
    const handlers = useMemo(() => {
        return createHandlers(setIsProfileOpen, profileRef)
    }, [isProfileOpen, profileRef])

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileRef.current && 
                !profileRef.current.contains(event.target) &&
                (!profileButtonRef.current || !profileButtonRef.current.contains(event.target))
            ) {
                setIsProfileOpen(false);
            }
        }

        if(isProfileOpen) {
            console.log("Listeners added")
            document.addEventListener("wheel", handlers.disableScrollByWheelAndTouch, { passive: false })
            document.addEventListener("touchmove", handlers.disableScrollByWheelAndTouch, { passive: false })
            document.addEventListener("keydown", handlers.disableScrollByKeys)
            document.addEventListener("keydown", handlers.handleKeyDown)
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            console.log("Listeners removed")
            document.removeEventListener("wheel", handlers.disableScrollByWheelAndTouch)
            document.removeEventListener("touchmove", handlers.disableScrollByWheelAndTouch)
            document.removeEventListener("keydown", handlers.disableScrollByKeys)
            document.removeEventListener("keydown", handlers.handleKeyDown)
            document.removeEventListener("mousedown", handleClickOutside)

            profileButtonRef.current?.blur()
        }
      }, [isProfileOpen, handlers])

    return (
        <>
            {
                isProfileOpen && (
                    <ProfileMenu 
                    ref={profileRef}
                    />
                )
            }

            <div 
            className={`
            relative px-1
            w-[${NAVBAR.width}] h-[${NAVBAR.height}]
            flex items-center justify-between`}>
                <Link
                to={DESKTOP_NAVBAR_CONFIG.logo.link}>
                    <img
                    src={theme === "light" ? DESKTOP_NAVBAR_CONFIG.logo.light : DESKTOP_NAVBAR_CONFIG.logo.dark}
                    className="size-[6rem]"
                    alt={DESKTOP_NAVBAR_CONFIG.logo.alt} />
                </Link>
                <div>
                    {
                        renderSearchBar()
                    }
                </div>
                <div className="h-full flex items-center gap-5">
                    {
                        renderNavbarButtons()
                    }
                </div>
            </div>
        </>
    )
}

export default DesktopNavbar