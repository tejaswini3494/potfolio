import React from "react";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuopen, setMenuOpen] = useState(false);
  const get = () => {
    setMenuOpen(!menuopen);
  };
  return (
    <>
      <nav className="nav-wrapper">
        <nav className="nav-conten">
          <h2 className="logo">
            Tejaswi<span>ni</span>
          </h2>
          <div className="menu" onClick={get}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuopen ? "open" : ""}>
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
            <button className="btn">Hire Me</button>
          </ul>
        </nav>
      </nav>
    </>
  );
}
