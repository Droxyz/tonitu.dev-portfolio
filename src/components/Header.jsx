import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <div className="flex w-full justify-between items-center py-4 container mx-auto ">
        <h1 className="text-lg font-bold">tonitu</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="absolute right-0 p-2">
        <div className="absolute top-0 right-0 overflow-hidden w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] max-h-[200vh] ">
          <div
            className={`radial-gradient ${darkMode ? "dark" : "light"}`}
          ></div>
        </div>
        <button
          onClick={toggleDarkMode}
          className="relative bg-[var(--primary)] rounded-lg p-2"
        >
          {darkMode ? <FaSun color="yellow" /> : <FaMoon color="blue" />}
        </button>
      </div>
    </>
  );
};

export default Header;
