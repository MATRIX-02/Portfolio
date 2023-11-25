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
						<GoHome size={25} className="menu-icon" />
						Home
					</li>
					<li className="menu-item">
						<FaCode size={25} className="menu-icon" />
						Snippets
					</li>
					<li className="menu-item">
						<LuGithub size={25} className="menu-icon" />
						Github
					</li>
					<li className="menu-item">
						<FiLinkedin size={25} className="menu-icon" />
						LinkedIn
					</li>
					<li className="menu-item">
						<BiLogoInstagram size={25} className="menu-icon" />
						Instagram
					</li>
				</ul>
			</div>
		</>
	);
};

export default Menu;
