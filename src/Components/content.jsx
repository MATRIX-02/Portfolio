import ProjectCard from "./project-card";
import {projectList, techList} from "../utils/config";
import TechStack from "./techStack";

const Content = () => {
	
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
				{techList.map((tech) => (
					<TechStack key={tech.id} domain={tech.domain} techList={tech.list} />
				))}
			</div>
		</div>
	);
};

export default Content;
