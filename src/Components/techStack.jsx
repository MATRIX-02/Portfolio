/* eslint-disable react/prop-types */
import TList from "./tList";

// eslint-disable-next-line react/prop-types
const TechStack = ({ domain, techList }) => {
	return (
		<>
			<div className="tech-card">
				<h3>{domain}</h3>
				<div className="tech-list-container">
					{techList.map((tech) => (
						<TList key={tech} list={tech} />
					))}
				</div>
			</div>
		</>
	);
};

export default TechStack;
