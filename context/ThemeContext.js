import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        localTheme ? setTheme(localTheme) : setTheme("light")
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.querySelector("html").setAttribute("class", theme)
    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}