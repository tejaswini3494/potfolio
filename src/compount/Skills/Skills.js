import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "./SkillsData";
import SkillsInfoCard from "./SkillsInfoCard";

export default function Skills() {
  const [selectSkills, setSelectSkills] = useState(SKILLS[1]);

  console.log(SKILLS);
  // console.log(SKILLS[1].skills[0].skill);
  return (
    <section className="skills-container" id="skills">
      <h5>Skills</h5>

      <div className="skills-content">
        <SkillsInfoCard skillsCard={SKILLS} />
      </div>
    </section>
  );
}
