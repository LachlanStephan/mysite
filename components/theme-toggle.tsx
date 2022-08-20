import { FaRegLightbulb } from "react-icons/fa";
import { ToggleMode } from "../utils/darkmode";

export const ThemeToggle = () => {

  const toggleColour = () => {
    ToggleMode();
  };

  return (
    <span
      className="h-8 w-8 ml-2 hover:border-2 border-accent_grey rounded-md transistion active:translate-y-1 duration-300 flex justify-center items-center cursor-pointer"
      onClick={toggleColour}
    >
      <FaRegLightbulb />
    </span>
  );
};
