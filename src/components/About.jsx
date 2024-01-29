import React, { useState } from "react";
import TypeWriter from "./TypeWriter";
import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col md:flex-row mt-20 p-5 sm:p-10 md:p-20 justify-between items-center">
        <div className="rounded-lg p-10 lg:bg-transparent backdrop-blur-sm flex flex-col xl:flex-row gap-10">
          <div className="flex xl:flex-col gap-5 items-center">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://www.linkedin.com/in/toni-tuomaala-4a967624a/"
                target="_blank"
                
              >
                {isHovered ? (
                  <FaLinkedinIn size={30} />
                ) : (
                  <FaLinkedin size={30} />
                )}
              </a>
            </div>

            <a href="https://github.com/Droxyz" target="_blank">
              <FaGithub size={30} />
            </a>
          </div>

          <div>
            <h1 className="text-4xl animate-bounce">Hi, I'm Toni Tuomaala</h1>
            <h3 className="text-[var(--accent)] ">
              <TypeWriter text={" Passionate student with fun hobbies."} />
            </h3>
          </div>
        </div>

        <div
          className="bg-[var(--background)] rounded-lg"
          style={{
            boxShadow: "1px -1px 10px var(--background)",
            maxHeight: "300px",
            maxWidth: "300px",
            animation: "fadeIn 1s",
          }}
        >
          <img
            className="z-[-1] h-full w-full opacity-100 dark:opacity-70 object-cover rounded-lg"
            style={{ boxShadow: "-5px 5px 10px var(--primary)" }}
            src="me.png"
            alt="asd"
          />
        </div>
      </div>

      <div style={{animation: "fadeIn 1s"}}>
        <h1 className=" border-[var(--text)] border-b flex gap-3 font-bold">
          About me
          <FaHeart color="red" />
        </h1>

        <p className="font-[Roboto] p-5 mt-5">
          Part student, part employee, full enthusiastic. I'm a very fast
          learner, and excel in customer service. With a dynamic precense in the
          IT field, I'm currently seeking to expand my expertise in technology.
          I am interested about exploring various IT roles, especially those
          that leverage my skills. Eager to join a team where I can contribute
          and glow, I look forward to connecting with like-minded professionals.
        </p>
        <div className="flex gap-10 my-3">
          Open cv:
          <a href="ToniTuomaalaCVen-NONUMBER.pdf" target="_blank" >CV (eng)</a>
          <a href="ToniTuomaalaCV-EINUMEROA.pdf" target="_blank" >CV (fin)</a>
        </div>
      </div>
    </div>
  );
}
