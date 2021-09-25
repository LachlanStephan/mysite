import {useEffect, useState} from "react";

const useDarkMode = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const colourTheme = theme === "dark" ? "light" : "dark";
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colourTheme);
		root.classList.add(theme);
	}, [theme, colourTheme]);
	localStorage.setItem("theme", theme);
	return [colourTheme, setTheme] as const;
};

export default useDarkMode;
