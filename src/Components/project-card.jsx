/* eslint-disable react/jsx-no-target-blank */
const ProjectCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { projectList } = props;

  const { projectImg, projectName, projectDesc, projectLink } =
    projectList || {};

  return (
    <>
      <a href={projectLink} target="_blank">
        <div className="project-card">
          <img
            className="project-image"
            src={projectImg}
            alt=""
            draggable="false"
          />

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
