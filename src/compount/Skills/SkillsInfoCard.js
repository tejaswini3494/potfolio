import React from "react";

export default function SkillsInfoCard({ skillsCard }) {
  return (
    <>
      {skillsCard.map((currEle) => {
        return (
          <>
            <div className="skills-div">
              <h3>{currEle.title}</h3>

              {currEle.skills.map((item) => {
                return (
                  <>
                    <div className="psection">
                      <p>{item.skill}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}
