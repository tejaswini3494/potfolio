import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <section className="about-container" id="about">
        <h5>About Us</h5>
        <div className="about-content">
          <div className="about-education">
            <img src="Image/01.jpg" alt="" />
          </div>
          <div className="about-text-container">
            <h2>I am Tejaswini Virshaiv& I am Web Designer</h2>
            <p>
              I am skilled at Frontend technology like HTML, CSS and Javascript
              their use to built, design and improve responsive webiste and web
              application
            </p>
            <div className="education-text">
              <h4>Education</h4>
              <p>2021-2024</p>
              <p>Bachelor of Computer Application</p>
              <p>CGPA :</p>
            </div>

            <button className="btn">More About Me</button>
          </div>
        </div>
      </section>
    </>
  );
}
