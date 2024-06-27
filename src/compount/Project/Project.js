import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import ProjectData from "./ProjectData";

export default function Project() {
  const [ProjectList, setProjectList] = useState(ProjectData);
  // console.log(ProjectList);
  return (
    <section className="project-container" id="project">
      <ProjectCard ProjectList={ProjectList} />
    </section>
  );
}
