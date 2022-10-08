import React from "react";
import PropTypes from "prop-types";

const ProjectSelected = ({ project }) => {
  return (
    <div className="projectContainer__detailsContainer__bandUp__projectSelected">
      {project.image && <img src={project.image} alt={project.name} />}
    </div>
  );
};

ProjectSelected.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
};

ProjectSelected.defaultProps = {
  project: [],
};

export default ProjectSelected;
