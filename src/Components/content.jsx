import ProjectCard from "./project-card";
import projectList from "../utils/config";

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
					<ProjectCard
						key={projectList.indexOf(project)}
						projectList={project}
					/>
				))}
			</div>
			<h3>What I know</h3>
			<div className="techStack"></div>
		</div>
	);
};

export default Content;
