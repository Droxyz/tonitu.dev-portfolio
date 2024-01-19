import React from "react";
import {
  FaBriefcase,
  FaHamburger,
  FaNetworkWired,
  FaSchool,
  FaBabyCarriage,
  FaArrowUp,
} from "react-icons/fa";

function Experience(props) {
  console.log(props.cvData);
  // Experience sorted by starting date, b, a to have them in reverse
  const experience = props.cvData.experience.sort((b, a) => {
    const startDateA = new Date(a.startDate);
    const startDateB = new Date(b.startDate);

    return startDateA - startDateB;
  });

  // map each position and return jsx object
  const experienceElements = experience.map((position, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={index}
        className={`my-4 flex flex-col-reverse md:flex-row w-full ${
          isEven ? " " : " lg:flex-row-reverse"
        }`}
      >
        <div
          key={index}
          className={`rounded-md p-4 w-full md:w-[47%] ${
            isEven ? "bg-[var(--secondary)] " : "bg-[var(--primary)] "
          }`}
        >
          <div className="company-container">
            <div className="flex items-center">
              <h3>{position.company}</h3>
              <p className="opacity-70">
                &nbsp; {"- "}
                {position.position}
              </p>
            </div>
            <div className="information-container">
              <p>{position.description}</p>
            </div>
            <div className="skills-container">
              {position.skillsRequired.map((skill, skillIndex) => (
                <p key={skillIndex}>{skill}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:mt-4">
          <div className="md:border-y border-[var(--accent)] flex md:mx-5 md:px-5 bg-[var(--background)]">
            <p className="text-[var(--text)] p-1" >
              {position.startDate} - {position.endDate}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="relative flex flex-col">
        <h1 className="">WORK EXPERIENCE</h1>
        {experienceElements}
        <div className="absolute h-full w-full hidden md:flex items-center justify-center overflow-hidden z-[-1]">
          <p className="absolute top-0 bg-[var(--background)] border border-[var(--accent)] p-1 rounded-md text-[var(--text)]">
            <FaArrowUp />
          </p>
          <div className="h-full border-l border-[var(--accent)]"></div>
          <p className="absolute bottom-0 bg-[var(--background)] border border-[var(--accent)] p-1 rounded-md text-[var(--text)]">
            <FaBabyCarriage />
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
