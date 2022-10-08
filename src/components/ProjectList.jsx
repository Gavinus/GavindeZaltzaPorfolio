import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ data, selected, setSelected }) => {
  return (
    <div className="projectContainer__detailsContainer__bandDown__projectList">
      {data &&
        data
          .filter((project) => project.id !== selected)
          .map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              setSelected={setSelected}
            />
          ))}
    </div>
  );
};

ProjectList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
  selected: PropTypes.number,
  setSelected: PropTypes.func,
};

ProjectList.defaultProps = {
  selected: 0,
  setSelected: () => {},
};

export default ProjectList;
