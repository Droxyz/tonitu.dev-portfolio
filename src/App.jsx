import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useState, useRef } from "react";
import cvData from "./components/cv-data.json";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
    ref.current.classList.add("post-scroll-animation");

    setTimeout(() => {
      ref.current.classList.remove("post-scroll-animation");
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Load the user's theme preference from localStorage, default to system preference
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    } else {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  });

  // Update localStorage and apply the theme when darkMode changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <header className="sticky top-0 border-b-2 border-[var(--accent)] backdrop-blur-3xl px-10 z-10">
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          onHomeClick={() => scrollToTop()}
          onExperienceClick={() => scrollToRef(experienceRef)}
          onSkillsClick={() => scrollToRef(skillsRef)}
          onContactClick={() => scrollToRef(contactRef)}
        />
      </header>

      <div className={`fixed right-0 p-2 z-[-1]`}>
        <div className="absolute top-0 right-0  w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] max-h-[200vh]">
          <div
            className={`radial-gradient ${darkMode ? "dark" : "light"}`}
          ></div>
        </div>
      </div>

      <main className="flex flex-col container mx-auto px-10 gap-20 w-full lg:w-[80vw]">
        <div>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience cvData={cvData} />
        </div>
        <div ref={skillsRef}>
          <Skills cvData={cvData} />
        </div>
      </main>

      <footer
        ref={contactRef}
        className="relative bg-[var(--background)] p-4 w-full"
      >
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Footer />
      </footer>
    </>
  );
}

export default App;
