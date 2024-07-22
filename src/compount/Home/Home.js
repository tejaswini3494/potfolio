import React from "react";
import "./Home.css";

import Image from "../Image/07.jpg";
export default function Home() {
  return (
    <>
      <section className="home-conatiner" id="#">
        <div className="home-content">
          <h2>Hellow, I'M Tejaswini Virshaiv</h2>
          <p>
            I am a Frontend Developer. This is my official portfolio website to
            shows all Details and work experience web development .
          </p>

          <button className="btn">Hire Me</button>
        </div>

        <div className="home-img">
          <img src={Image} alt="" />
        </div>
      </section>
    </>
  );
}
