const ProjectCard = (props) => {
	// eslint-disable-next-line react/prop-types
	const { projectList } = props;

	const { projectImg, projectName, projectDesc } = projectList || {};

	return (
		<>
			<a href="#">
				<div className="project-card">
					<div className="project-image">
						<img src={projectImg} alt="" draggable="false" />
					</div>
					<div className="project-desc">
						<h4>{projectName}</h4>
						<p>{projectDesc}</p>
					</div>
				</div>
			</a>
		</>
	);
};

export default ProjectCard;
