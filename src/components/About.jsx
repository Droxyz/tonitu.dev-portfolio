import React from "react";
import TypeWriter from "./TypeWriter";
import {
  FaArrowAltCircleUp,
  FaArrowUp,
  FaArrowsAlt,
  FaArrowsAltH,
  FaCartArrowDown,
  FaFile,
  FaGithub,
  FaHeart,
  FaLink,
  FaLinkedin,
  FaLinkedinIn,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col md:flex-row mt-20 p-5 sm:p-10 md:p-20 justify-between items-center">
        <div className="rounded-lg p-10 lg:bg-transparent backdrop-blur-sm flex flex-col xl:flex-row gap-10">
          <div className="flex xl:flex-col gap-5 items-center">
            <FaGithub size={30} /> <FaLinkedin size={30} />
          </div>

          <div>
            <h1 className="text-4xl">Hi, I'm Toni Tuomaala</h1>
            <h3 className="text-[var(--accent)]">
              <TypeWriter text={" Passionate student with fun hobbies."} />
            </h3>
          </div>
        </div>

        <div
          className="bg-[var(--background)] rounded-lg "
          style={{
            boxShadow: "1px -1px 10px var(--background)",
            maxHeight: "300px",
            maxWidth: "300px",
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

      <div>
        <h1 className=" border-[var(--text)] border-b">About me <FaHeart/></h1>

        <p className="font-[Roboto] p-5 mt-5">
          Part student, part employee, full enthusiastic. Excelling in customer
          service, and with a dynamic precense in the IT field, I'm currently
          seeking to expand my expertise in technology. I am interested about
          exploring various IT roles, especially those that leverage my skills.
          Eager to join a team where I can contribute and glow, I look forward
          to connecting with like-minded professionals.
        </p>
        <div className="flex gap-10 hover:cursor-pointer my-5">
          Download cv:
          <a>CV (eng)</a>
          <a>CV (fin)</a>
        </div>
      </div>
    </div>
  );
}
