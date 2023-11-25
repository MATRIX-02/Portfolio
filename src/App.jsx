import "./Styles/App.css";

import Nav from "./Components/nav";
import Logo from "./Components/logo";
import Menu from "./Components/menu";
import Content from "./Components/content";
// import PreLoader from "./Components/PreLoader";

const App = () => {
	return (
		<>
			{/* <PreLoader /> */}
			<div className="container">
				<div className="navbar">
					<Logo className="logo-container" />
					<Nav />
				</div>
				<div className="menu-content">
					<Menu />
					<Content />
				</div>
			</div>
		</>
	);
};

export default App;
