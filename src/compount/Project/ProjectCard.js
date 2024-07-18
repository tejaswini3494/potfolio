import React from "react";
import Play from "../Image/play.jpg";

export default function ProjectCard({ ProjectList }) {
  return (
    <>
      <h5>Projects</h5>
      <div className="project-card-container">
        {ProjectList.map((curElem) => {
          return (
            <>
              <div className="box">
                <img src={curElem.img} alt="" />
                <h6>{curElem.name}</h6>
                <a href={curElem.demo} className="menu-item ">
                  {" "}
                  Demo
                  <img src={Play} className="play" />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
