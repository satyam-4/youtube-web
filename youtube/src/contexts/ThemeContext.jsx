import { useState, createContext, useContext } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState((window.matchMedia("(prefers-color-scheme)").matches ? "dark" : "light"))

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)