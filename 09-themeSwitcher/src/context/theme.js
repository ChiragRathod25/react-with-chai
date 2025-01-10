import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"dark",
    toggleThemeMode:()=>{}
})

export const ThemeContextProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}