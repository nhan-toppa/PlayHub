import { createContext, useContext, useState } from "react";

interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProps>("");
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const value = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
