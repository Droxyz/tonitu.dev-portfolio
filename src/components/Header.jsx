import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <div className="flex w-full justify-between items-center py-4 container mx-auto">
        <h1 className="text-lg font-bold">tonitu</h1>
        <nav>
          <ul className="flex gap-4 text">
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
            <li>
              <button
                onClick={toggleDarkMode}
                className="absolute right-2 bg-[var(--primary)] rounded-lg p-2"
              >
                {darkMode ? <FaSun color="yellow" /> : <FaMoon color="blue" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
