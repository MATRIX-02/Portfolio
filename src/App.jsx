import { useState,  useEffect } from "react";

import "./Styles/App.css";
// import useLocalStorage from "use-local-storage";
import Nav from "./Components/nav";
import Logo from "./Components/logo";
import Menu from "./Components/menu";
import Content from "./Components/content";
import PreLoader from "./Components/PreLoader";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [menuToggle, setMenuToggle] = useState(false);

  // To set the local storage value
  // let defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const menuHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  useEffect(() => {
    // Update the class or attribute on the html or body tag when isToggleOn changes
    if (menuToggle) {
      document.documentElement.classList.add("positionFixed");
    } else {
      document.documentElement.classList.remove("positionFixed");
    }
  }, [menuToggle]);

  return (
    <div data-theme={theme}>
      {/* <PreLoader /> */}
      <div className="navbar">
        <div className="theme-container">
          <Logo />
        </div>

        <Nav
          menuToggle={menuToggle}
          onToggle={menuHandler}
          change={handleTheme}
        />
      </div>
      <div className="container">
      
          <Menu menuToggle={menuToggle} onToggle={menuHandler} />
          <Content />
        
      </div>
    </div>
  );
};

export default App;
