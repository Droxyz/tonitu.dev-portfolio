import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useState, useRef } from "react";
import cvData from "./components/cv-data.json";
import Experience from "./components/Experience";

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
        top: `${Math.random() * (document.body.scrollHeight-200)}px`,
        left: `${Math.random() * 80}%`,
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

  console.log(document.body.scrollHeight)
  const shapes = createShapes(10); // Change the number of shapes as needed

  return (
    <>
      {shapes}

      <div className={`flex flex-col min-h-screen`}>
        <header className="sticky top-0 border-b-2 border-[var(--accent)] backdrop-blur-lg px-10">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </header>
        <div className="hero flex-grow">
          <div class="line"></div>
          <p>
            testasdhjknoadsijnobasdijnoasdonjasdjnonad
            jostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadj
            ostestasdhjknoadsijnobasdijnoasdonjasdjnona
            djostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadjos
            testasdhjknoadsijnobasdijnoasdonjasdjnonad
            jostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadj
            ostestasdhjknoadsijnobasdijnoasdonjasdjnona
            djostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadjos
            testasdhjknoadsijnobasdijnoasdonjasdjnonad
            jostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadj
            ostestasdhjknoadsijnobasdijnoasdonjasdjnona
            djostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadjos
            testasdhjknoadsijnobasdijnoasdonjasdjnonad
            jostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadj
            ostestasdhjknoadsijnobasdijnoasdonjasdjnona
            djostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadjos
            testasdhjknoadsijnobasdijnoasdonjasdjnonad
            jostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadjo
            stestasdhjknoadsijnobasdijnoasdonjasdjnona
            djostestasdhjknoadsijnobasdijnoasdonjasdjnonadjostes
            tasdhjknoadsijnobasdijnoasdonjasdjnonadjos
          </p>
        </div>
      </div>

      <main className=" container mx-auto px-10 ">

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
