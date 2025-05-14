import { useState, createContext, useContext } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme)").matches ? "dark" : "light"))

    const updateTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem("theme", theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)