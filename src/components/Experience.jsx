import React, { useState } from "react";
import {
  FaBriefcase,
  FaHamburger,
  FaNetworkWired,
  FaSchool,
  FaBabyCarriage,
  FaArrowUp,
} from "react-icons/fa";

function Experience(props) {
  const [clickedCard, setClickedCard] = useState(null);

  // Experience sorted by starting date, b, a to have them in reverse
  const experience = props.cvData.experience.sort((b, a) => {
    const startDateA = new Date(a.startDate);
    const startDateB = new Date(b.startDate);

    return startDateA - startDateB;
  });

  // map each position and return jsx object
  const experienceElements = experience.map((position, index) => {
    const isEven = index % 2 === 0;

    const isClicked = clickedCard === position;

    return (
      <div
        key={index}
        className={`my-4 flex flex-col-reverse md:flex-row w-full ${
          isEven ? " " : " lg:flex-row-reverse"
        }`}
      >
        <div
          key={index}
          className={`hover:cursor-pointer rounded-md p-4 w-full md:w-[47%]  ${
            isEven ? "bg-[var(--secondary)] " : "bg-[var(--primary)] "
          }`}
          onClick={() => {
            isClicked ? setClickedCard(null) : setClickedCard(position); // Set the clicked card
            console.log(position); // Log the clicked card
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center mb-2 flex-wrap">
              <h3>{position.company}</h3>
              <p className="opacity-70">
                &nbsp; {"- "}
                {position.position}
              </p>
            </div>
            <div className="information-container">
              <p style={{ fontFamily: "Roboto" }}>{position.description}</p>
            </div>
            <div className={isClicked ? `flex` : `hidden`}></div>
            <div className="flex flex-wrap gap-x-4">
              {position.skillsRequired.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:mt-4">
          <div className="md:border-y border-[var(--accent)] flex md:mx-5 md:px-5 lg:px-8">
            <p className="text-[var(--text)] p-1 backdrop-blur-sm">
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
        <h1 className="">EXPERIENCE</h1>
        {experienceElements}
        <div className="absolute h-full w-full hidden md:flex items-center justify-center overflow-hidden z-[-1]">
          <p className="absolute top-0 backdrop-blur-sm border border-[var(--accent)] p-1 rounded-md">
            <FaArrowUp />
          </p>
          <div className="h-full border-l border-[var(--accent)]"></div>
          <p className="absolute bottom-0 backdrop-blur-sm border border-[var(--accent)] p-1 rounded-md">
            <FaBabyCarriage />
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
