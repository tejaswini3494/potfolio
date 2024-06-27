import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home-conatiner" id="#">
        <div className="home-content">
          <h2>Hellow, I'M Tejaswini Virshaiv</h2>
          <p>
            I am a Web Designer This is my official portfolio website to showes
            all Details and work experience web development
          </p>
          {/* <marquee behavior="" direction="left">  WELCOME TO MY POTFOLIO WEBSITE .....!</marquee> */}
       
          <button className="btn">
              Hire Me
            </button>
        </div>

        <div className="home-img">
          <img src="Image/home.png" alt="" />
        </div>
      </section>
    </>
  );
}
