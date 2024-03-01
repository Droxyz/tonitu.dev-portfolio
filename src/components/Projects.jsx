import React, { useState } from "react";

const Projects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex) =>
    (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex) => (currentIndex + 1) % projects.length;

  const ProjectCard = (index) => {
    const project = projects[index];

    return (
      <>
        <img
          className="max-h-[500px] object-contain group-hover:opacity-0"
          src={project.thumbnail}
          alt={`${project.title} Image`}
        />
        <h1>{project.title}</h1>
      </>
    );
  };

  return (
    <>
      <h1 className="font-bold mb-10">Projects</h1>
      <div className="relative w-full min-h-[400px] flex justify-center items-center">
        <div className="absolute w-1/3 transform -translate-x-1/2 rotate-12 opacity-50 z-[-1] ">
          {ProjectCard(prevIndex(currentIndex))}
        </div>
        <div className="relative text-center w-full md:w-2/3 flex flex-col justify-center group">
          {ProjectCard(currentIndex)}
          <div className="opacity-0 group-hover:opacity-100 group-onclick:opacity-100 absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center p-2 rounded-lg">
            <video
              className=" h-full transition-opacity duration-500 ease-in-out opacity-80 z-1"
              src={projects[currentIndex].video}
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              onFocus={(event) => event.target.play()}
              onBlur={(event) => event.target.pause()}
              loop
              muted
              controls
            >
              Your browser does not support the video tag.
            </video>
            <p className=" absolute top-0 left-0 m-2 flex gap-3 -translate-y-[150%] bg-black bg-opacity-90 px-3">
              <p className="text-white font-bold">{projects[currentIndex].title}</p>
            </p>
            <div className="absolute top-0 right-0 text-white p-3 bg-black bg-opacity-20">
              {projects[currentIndex].skillsRequired.map((skill) => (
                <div className="">
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-1/3 transform translate-x-1/2 -rotate-12 opacity-50 z-[-1] text-end">
          {ProjectCard(nextIndex(currentIndex))}
        </div>
      </div>

      <div className="flex gap-5 items-center justify-between mt-15">
        <button
          className="bg-[var(--primary)] p-3"
          onClick={() => setCurrentIndex(prevIndex(currentIndex))}
        >
          Previous
        </button>
        <div>
          <p>{projects[currentIndex].description}</p>
        </div>
        <button
          className="bg-[var(--primary)] p-3"
          onClick={() => setCurrentIndex(nextIndex(currentIndex))}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Projects;
