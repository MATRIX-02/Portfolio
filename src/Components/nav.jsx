/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Nav = ({ onToggle, change }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSpacebar = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handleButtonClick = (e) => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    onToggle();
    handleButtonClick();
  };
  return (
    <div className="navbar-container">
      <div className="theme-changer">
        <input type="checkbox" className="checkbox" id="checkbox"  onKeyDown={handleSpacebar}/>
        <label
          htmlFor="checkbox"
          className="checkbox-label"
          onClick={change}
          // onKeyDown={(e) => {
          //   if (e.key === " " || e.key === "Enter") {
          //     change();
          //   }
          // }}
          // tabIndex={0}
        >
          <FaMoon className="fas fa-moon" />
          <FaSun className="fas fa-sun" />
          <span className="ball"></span>
        </label>
      </div>
      {/* <button className="contact-me">Contact Me</button> */}
      <div className="enter_menu wrapper">
        <div
          className={`icon nav-icon-1 ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
