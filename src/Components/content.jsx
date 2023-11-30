import ProjectCard from "./project-card";
import projectList from "../utils/config";
import TechStack from "./techStack";

const Content = () => {
	const Frontend = "Frontend";
	const FrontendList = [
		"HTML",
		"CSS",
		"JavaScript",
		"Gsap",
		"Tailwind",
		"React Js",
	];

	const Backend = "Backend";
	const BackendList = ["Node.js"];

	const Others = "Others";
	const OtherList = ["Figma", "Adobe XD", "C++", "Python"];

	return (
		<div className="content-container">
			<div className="profile-banner">
				<div className="profile-avatar"></div>
				<h1>Mayank</h1>
			</div>
			<h3>Projects</h3>
			<div className="projects">
				{projectList.map((project) => (
					<ProjectCard key={project.id} projectList={project} />
				))}
			</div>
			<h3>What I know</h3>
			<div className="tech-stack">
				<TechStack domain={Frontend} techList={FrontendList} />
				<TechStack domain={Backend} techList={BackendList} />
				<TechStack domain={Others} techList={OtherList} />
			</div>
		</div>
	);
};

export default Content;
