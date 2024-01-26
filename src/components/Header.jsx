import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode, onHomeClick, onExperienceClick, onSkillsClick, onContactClick }) => {
  return (
    <>
      <div className="flex w-full justify-between items-center py-4 container mx-auto">
        <img src="tonitu.png" alt="TONITU" className=" max-h-10" />
        <nav>
          <ul className="flex gap-4 text">
            <li>
              <a onClick={onHomeClick}>
                Home
              </a>
            </li>
            <li>
              <a onClick={onExperienceClick}>
                Experience
              </a>
            </li>
            <li>
              <a onClick={onSkillsClick}>
                Skills
              </a>
            </li>
            <li>
              <a onClick={onContactClick}>
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
