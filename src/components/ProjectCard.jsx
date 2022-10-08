import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ id, image, name, setSelected }) => {
  return (
    <div
      className="projectContainer__detailsContainer__bandDown__projectList__buttonProject"
      role="button"
      onClick={() => setSelected(id)}
      onKeyDown={() => setSelected(id)}
      tabIndex="0"
    >
      <img
        className="projectContainer__detailsContainer__bandDown__projectList__buttonProject__buttonProjectImg"
        src={image}
        alt={name}
      />
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  setSelected: PropTypes.func,
  id: PropTypes.number,
};

ProjectCard.defaultProps = {
  image: "",
  name: "",
  setSelected: () => {},
  id: 0,
};

export default ProjectCard;
