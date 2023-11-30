import { useState } from "react";

import "./Styles/App.css";
// import useLocalStorage from "use-local-storage";
import Nav from "./Components/nav";
import Logo from "./Components/logo";
import Menu from "./Components/menu";
import Content from "./Components/content";
import PreLoader from "./Components/PreLoader";

const App = () => {
	const [theme, setTheme] = useState("dark");

	// To set the local storage value
	// let defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	// const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

	const handleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<div data-theme={theme}>
			<PreLoader />
			<div className="container">
				<div className="navbar">
					<div className="theme-container">
						<Logo />
					</div>
					<Nav change={handleTheme} />
				</div>
				<div className="menu-content">
					<Menu />
					<Content />
				</div>
			</div>
		</div>
	);
};

export default App;
