import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ ProjectList }) {
  return (
    <>
      <h5>Projects</h5>
      <div className="project-card-container">
        {ProjectList.map((curElem) => {
          return (
            <>
              <div className="box" > 
                <img src={curElem.img} alt="" />
                <h6>{curElem.name}</h6>
                <Link to={curElem.demo}>Demo</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
