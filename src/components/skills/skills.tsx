import React from "react";
import { IconBaseProps } from "react-icons";

// Declare props
interface Props {
  title1?: string;
  title2?: string;
  icon1?: IconBaseProps;
  icon2?: IconBaseProps;
  icon3?: IconBaseProps;
  icon4?: IconBaseProps;
  icon5?: IconBaseProps;
  icon6?: IconBaseProps;
  icon7?: IconBaseProps;
  icon8?: IconBaseProps;
  icon9?: IconBaseProps;
  icon10?: IconBaseProps;
  icon11?: IconBaseProps;
  icon12?: IconBaseProps;
  icon13?: IconBaseProps;
  icon14?: IconBaseProps;
  icon15?: IconBaseProps;
  icon16?: IconBaseProps;
  icon17?: IconBaseProps;
  icon18?: IconBaseProps;
  icon19?: IconBaseProps;
  icon20?: IconBaseProps;
  icon21?: IconBaseProps;
  icon22?: IconBaseProps;
}

// Parse props
const Skills: React.FC<Props> = ({
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  title1,
  title2,
  icon12,
  icon13,
  icon14,
  icon15,
  icon16,
  icon17,
  icon18,
  icon19,
  icon20,
  icon21,
  icon22,
}) => {
  return (
    <div id="skills" className="py-4">
      {/* current skills */}
      <h5 className="font-bold text-lg">{title1}</h5>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-yellow-300">{icon1}</div>
        <div className="hover:text-blue-400">{icon2}</div>
        <div className="hover:text-green-400">{icon3}</div>
        <div className="hover:text-red-500">{icon4}</div>
        <div className="hover:text-blue-700">{icon5}</div>
      </div>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-blue-200">{icon6}</div>
        <div className="hover:text-gray-500">{icon7}</div>
        <div className="hover:text-indigo-300">{icon8}</div>
        <div className="hover:text-red-400">{icon9}</div>
        <div className="hover:text-green-400">{icon10}</div>
      </div>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-indigo-500">{icon11}</div>
        <div className="hover:text-red-500">{icon12}</div>
        <div className="hover:text-red-300">{icon13}</div>
        <div className="hover:text-purple-500">{icon14}</div>
        <div className="hover:text-blue-400">{icon15}</div>
      </div>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-red-400">{icon22}</div>
      </div>
      {/* desired skills */}
      <h5 className="font-bold text-lg">{title2}</h5>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-red-300">{icon16}</div>
        <div className="hover:text-yellow-400">{icon17}</div>
        <div className="hover:text-blue-400">{icon18}</div>
        <div className="hover:text-blue-300">{icon19}</div>
        <div className="hover:text-yellow-300">{icon20}</div>
      </div>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-purple-500">{icon21}</div>
      </div>
    </div>
  );
};

export default Skills;
