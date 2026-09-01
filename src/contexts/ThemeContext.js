import { createContext } from "react";


const theme = {
    pageTitle: {
        fontSize: 32,
    },
    sectionTitle: {
        fontSize: 24,
    }
}

const ThemeContext = createContext(theme);

export { ThemeContext, theme };