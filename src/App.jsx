import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useState, useRef } from "react";
import cvData from "./components/cv-data.json";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  const asdRef = (useRef < HTMLDivElement) | (null > null);

  // Load the user's theme preference from localStorage, default to system preference
  const initialDarkMode =
    localStorage.getItem("theme") ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [darkMode, setDarkMode] = useState(initialDarkMode);

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

  function getRandomShape() {
    const shapes = ["circle", "rectangle", "pentagon", "hexagon"];
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
  }

  function createShapes(amount) {
    const shapesArray = [];

    for (let i = 0; i < amount; i++) {
      const shape = getRandomShape();
      const style = {
        top: `${Math.random() * (document.body.scrollHeight - 200)}px`,
        left: `${Math.random() * 100}%`,
      };

      shapesArray.push(
        <div
          key={i}
          className={`${shape} absolute z-[-1] opacity-[25%] overflow-hidden rotate-45`}
          style={style}
        ></div>
      );
    }

    return shapesArray;
  }

  const shapes = createShapes(10);

  return (
    <>
      <div className="w-full absolute">{shapes}</div>

      <header className="fixed w-full top-0 border-b-2 border-[var(--accent)] backdrop-blur-3xl px-10 z-10">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </header>

      <div className={`fixed right-0 p-2 z-[-1]`}>
        <div className="absolute top-0 right-0  w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] max-h-[200vh] z-[-1]">
          <div
            className={`radial-gradient ${darkMode ? "dark" : "light"}`}
          ></div>
        </div>
      </div>


      <main className="flex flex-col container mx-auto px-10 gap-20 w-full lg:w-[80vw]">
        <About />

        <Experience cvData={cvData} />
        <p>This is test text</p>
      </main>

      <footer className="dark:bg-black bg-violet-900 text-white p-4 border-t w-full">
        <Footer />
      </footer>
    </>
  );
}

export default App;
