/* eslint-disable react/prop-types */
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Nav = ({ change }) => {
	return (
		<div className="navbar-container">
			<div className="theme-changer">
				<input type="checkbox" className="checkbox" id="checkbox" />
				<label htmlFor="checkbox" className="checkbox-label" onClick={change}>
					<FaMoon className="fas fa-moon" />
					<FaSun className="fas fa-sun" />
					<span className="ball"></span>
				</label>
			</div>
			<button className="contact-me">Contact Me</button>
		</div>
	);
};

export default Nav;
