import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useState, useRef } from "react";

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
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex flex-col min-h-screen`}>
      <header className="dark:bg-black bg-violet-900 text-white p-4">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </header>
      <main className="flex-grow">
        <div className="">asdasd</div>
        <div className="test absolute left-[50%] top-[50%]">
          This is test text
        </div>
      </main>
      <footer className="dark:bg-black bg-violet-900 text-white p-4 border-t w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
