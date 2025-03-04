import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { useQuery } from "@apollo/client";
import GridIcon from "../../common/GridIcon";
import ListIcon from "../../common/ListIcon";
import GET_PROJECTS from "../../utils/projects";
import ListTasks from "./ListTasks";
import projects from "../../utils/projects";

const Project = () => {
  const { data } = useQuery(GET_PROJECTS);

  const [toggleView, setToggleView] = useState(true);
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <div className={"container"}>
      <div className="trigger-button" onClick={() => {
        setToggleView(!toggleView)
      }}>
        {toggleView ? <GridIcon size={20} color="gray" /> : <ListIcon size={20} color="gray" />}
      </div>

      <h3>List of Projects</h3>

      <div className="projects-wrapper">
        {toggleView ?
          (<ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
          >
            <Masonry>
              {data?.projects?.map((project) => {
                const isActive = project?.id === selectedProject.id
                return <div className={`col-12 project-card ${isActive ? "active" : "inactive"}`} key={project?.id}><div className="p-3 border bg-light" onClick={() => setSelectedProject(project)}>{project?.name}</div></div>
              })}

            </Masonry>
          </ResponsiveMasonry>)
          : (<ul className="list-group" >
            {data?.projects?.map((project) => {
              const isActive = project?.id === selectedProject.id
              return <li
                className={`list-group-item ${isActive ? "active" : "inactive"}`}
                onClick={() => setSelectedProject(project)}
              >{project?.name}</li>
            })}
          </ul>)
        }
      </div>


      {selectedProject &&
        <ListTasks
          tasks={selectedProject?.tasks}
          toggleView={toggleView}
          setToggleView={setToggleView}
        />}
    </div>
  );
}

export default Project;
