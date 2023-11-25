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
						<GoHome color="#D93643" size={25} className="menu-icon" />
						Home
					</li>
					<li className="menu-item">
						<FaCode color="#F77F00" size={25} className="menu-icon" />
						Snippets
					</li>
					<li className="menu-item">
						<LuGithub color="#2A9D8F" size={25} className="menu-icon" />
						Github
					</li>
					<li className="menu-item">
						<FiLinkedin color="#0277B5" size={25} className="menu-icon" />
						LinkedIn
					</li>
					<li className="menu-item">
						<BiLogoInstagram color="#B5179E" size={25} className="menu-icon" />
						Instagram
					</li>
				</ul>
			</div>
		</>
	);
};

export default Menu;
