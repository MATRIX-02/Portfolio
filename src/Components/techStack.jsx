/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const TechStack = ({ key, domain, techList }) => {
	return (
		<>
			<div className="tech-card">
				<h3>{domain}</h3>
				<div className="tech-list-container">
				<div className="tech-list">
					{techList.map((tech) => (
						<span key={key} > {tech} </span>
					))}
				</div>
				</div>
			</div>
		</>
	);
};

export default TechStack;
