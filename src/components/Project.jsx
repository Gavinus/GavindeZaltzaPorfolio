import React, { useState } from "react";
import projectDetails from "../utils/project";
import ProjectList from "./ProjectList";
import ProjectSelected from "./ProjectSelected";

const Project = () => {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(projectDetails);

  return (
    <div className="projectContainer" id="project">
      <div className="projectContainer__detailsContainer">
        <div className="projectContainer__detailsContainer__bandUp">
          {/* Description texte */}
          <div className="projectContainer__detailsContainer__bandUp__aboutProject">
            <div className="projectContainer__detailsContainer__bandUp__aboutProject__descProject">
              <p>{data && data.find((info) => info.id === selected).desc}</p>
              <p>
                Language:{" "}
                {data && data.find((info) => info.id === selected).langage}
              </p>
              <p>
                Link:{" "}
                <a href={data && data.find((info) => info.id === selected).url}>
                  <span>
                    {data && data.find((info) => info.id === selected).url}
                  </span>
                </a>
              </p>
            </div>
            <div className="projectContainer__detailsContainer__bandUp__aboutProject__langProject" />
            <div className="projectContainer__detailsContainer__bandUp__aboutProject__urlProject" />
          </div>
          {projectDetails && projectDetails.length > 0 && (
            <ProjectSelected
              project={data.find((info) => info.id === selected)}
            />
          )}
        </div>
        {/* Liste Projets */}
        <div className="projectContainer__detailsContainer__bandDown">
          {data && data.length > 0 && (
            <ProjectList
              data={data}
              selected={selected}
              setSelected={setSelected}
              setData={setData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
