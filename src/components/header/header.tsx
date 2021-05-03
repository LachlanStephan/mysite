import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

// Declare props
interface Props {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

const Header: React.FC<Props> = ({ link2, link3, link4 }) => {
  const [colourTheme, setTheme] = useDarkMode();
  return (
    <div>
      <button className="" onClick={() => setTheme(colourTheme)}>
        {colourTheme === "dark" ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        )}
      </button>
      <div className="py-2">
        <a className="navLinks" href="#works">
          {link2}
        </a>
      </div>
      <div className="py-2">
        <a className="navLinks" href="#skills">
          {link3}
        </a>
      </div>
      <div className="py-2">
        <a className="navLinks" href="#contact">
          {link4}
        </a>
      </div>
    </div>
  );
};

export default Header;
