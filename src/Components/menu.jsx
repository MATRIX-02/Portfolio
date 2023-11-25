import { GoHome } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";

const Menu = () => {
	return (
		<>
			<div className="menu-container">
				<ul className="menu-list">
					<li className="menu-item">
						<a href="/">
							<GoHome color="#D93643" size={25} className="menu-icon" />
							Home
						</a>
					</li>
					<li className="menu-item">
						<FaCode color="#F77F00" size={25} className="menu-icon" />
						Snippets
					</li>
					<li className="menu-item">
						<a
							href="https://github.com/MATRIX-02"
							target="_blank"
							rel="noreferrer"
						>
							<LuGithub color="#2A9D8F" size={25} className="menu-icon" />
							Github
						</a>
					</li>
					<li className="menu-item">
						<a
							href="https://www.linkedin.com/in/mayanksingh122001/"
							target="_blank"
							rel="noreferrer"
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
						>
							<BiLogoInstagram
								color="#B5179E"
								size={25}
								className="menu-icon"
							/>
							Instagram
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Menu;
