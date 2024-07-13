import React from "react";

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
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
