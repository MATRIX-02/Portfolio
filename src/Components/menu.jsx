/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";

const Menu = ({ onToggle, menuToggle }) => {
  return (
    <div className={`menu-container ${menuToggle ? "menu-toggle" : ""}`}>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" draggable="false">
            <GoHome color="#D93643" size={25} className="menu-icon" />
            Home
          </a>
        </li>

        <li className="menu-item">
          <a
            href="https://github.com/MATRIX-02"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <LuGithub color="#2A9D8F" size={25} className="menu-icon" />
            Github
          </a>
        </li>
        <li className="menu-item">
          <a
            href="https://www.linkedin.com/in/mayank--dev/"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <FiLinkedin color="#0277B5" size={25} className="menu-icon" />
            LinkedIn
          </a>
        </li>
        <li className="menu-item">
          <a
            href="https://www.instagram.com/mayank_1.2_/"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <BiLogoInstagram color="#8134AF" size={25} className="menu-icon" />
            Instagram
          </a>
        </li>
        <li className="menu-item">
          <a
            href="/Portfolio/docs/Mayank_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            draggable="false"
          >
            <FaCode color="#F77F00" size={25} className="menu-icon" />
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
