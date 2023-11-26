import image from "../assets/discord-clone.webp";

const ProjectCard = () => {
	return (
		<>
			<div className="project-card">
				<div className="project-image">
					<img src={image} alt="" draggable="false" />
				</div>
				<div className="project-desc">
					<h4>Project</h4>
					<p>This is a sample project</p>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
