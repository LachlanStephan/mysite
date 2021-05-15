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
}) => {
  return (
    <div id="skills" className="py-4">
      {/* current skills */}
      <h5 className="">{title1}</h5>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div className="hover:text-yellow-200">{icon1}</div>
        <div>{icon2}</div>
        <div>{icon3}</div>
        <div>{icon4}</div>
        <div>{icon5}</div>
      </div>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div>{icon6}</div>
        <div>{icon7}</div>
        <div>{icon8}</div>
        <div>{icon9}</div>
        <div>{icon10}</div>
      </div>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div>{icon11}</div>
        <div>{icon12}</div>
        <div>{icon13}</div>
        <div>{icon14}</div>
        <div>{icon15}</div>
      </div>
      {/* desired skills */}
      <h5>{title2}</h5>
      <div className="p-9 text-5xl justify-around flex w-auto h-auto">
        <div>{icon16}</div>
        <div>{icon17}</div>
        <div>{icon18}</div>
        <div>{icon19}</div>
        <div>{icon20}</div>
      </div>
    </div>
  );
};

export default Skills;
