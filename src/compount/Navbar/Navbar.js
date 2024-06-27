import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav-wrapper">
        <nav className="nav-conten">
          <h2 className="logo">
            Tejaswi<span>ni</span>
          </h2>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li>
              <a className="menu-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact
              </a>
            </li>
            <button className="btn" >
              Hire Me
            </button>
          </ul>
        
        </nav>
      </nav>
    </>
  );
}
