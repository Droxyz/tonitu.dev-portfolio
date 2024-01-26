import React, { useEffect, useState } from "react";

const FullStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 100 100"
  >
    <polygon
      points="50,0 61.8,38.2 100,38.2 70.9,61.8 82.1,100 50,76.4 17.9,100 29.1,61.8 0,38.2 38.2,38.2"
      fill="yellow"
    />
  </svg>
);
const EmptyStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 100 100"
  >
    <polygon
      points="50,0 61.8,38.2 100,38.2 70.9,61.8 82.1,100 50,76.4 17.9,100 29.1,61.8 0,38.2 38.2,38.2"
      stroke="yellow"
      fill="none"
    />
  </svg>
);

export default function Skills(props) {
  const skills = props.cvData.aboutMe.skills;

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([""]);

  function selectSkill(clickedSkill) {
    if (selectedSkill === clickedSkill) {
      setSelectedSkill(null);
      setFilteredProjects([]); // Clear filtered projects
    } else {
      setSelectedSkill(clickedSkill);

      // Filter projects based on the clicked skill
      const projectsWithSkill = profile.projects.filter((project) =>
        project.skillsRequired.includes(clickedSkill)
      );

      setFilteredProjects(projectsWithSkill);
    }
  }

  useEffect(() => {
    const skillText = document.getElementById(selectedSkill);
    console.log("selectedSkill changed to: " + selectedSkill);
  }, [selectedSkill]);

  return (
    <div className="max-w-4xl p-5">
      <h1 className="font-bold mb-10">My Skills</h1>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-8">
          <h2 className="mb-2 font-semibold">{skillCategory.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategory.items.map((skill, index) => (
              <div key={index} className="flex items-center bg-[var(--background2)] p-4 rounded-lg shadow">
                <div className="flex-grow">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p className="text-sm">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
