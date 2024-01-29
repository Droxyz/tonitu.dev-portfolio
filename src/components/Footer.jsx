import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[var(--background)] p-10 md:p-20 mx-10 flex flex-col md:flex-row">
      <h1 className="font-[a] text-4xl py-4 basis-1/3 ">
        Interested? Let me know
      </h1>
      <div className="ml-0 md:ml-10 mt-5 basis-2/3 lg:items-center ">
        <ul className="flex flex-col gap-3">
          <li className="flex">
            <p>toni.tuomaala@outlook.com</p>
          </li>
          <li className="flex gap-5">
            <FaLinkedin size={30} />
            <a
              href="https://www.linkedin.com/in/toni-tuomaala-4a967624a/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex gap-5">
            <FaGithub size={30} />
            <a href="https://github.com/Droxyz" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
