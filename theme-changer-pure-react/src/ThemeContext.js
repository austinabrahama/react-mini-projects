import React, { useState, useContext, useEffect } from "react";

export const ThemeContext = React.createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);