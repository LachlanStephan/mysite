import React from "react";
import arrow from "../../images/downArrow.png";

// Declare props
interface Props {
  aboutText: string;
  aboutText2: string;
  aboutText3: string;
}

const About: React.FC<Props> = ({ aboutText, aboutText2, aboutText3 }) => {
  return (
    <div id="about" className="min-h-screen py-2 flex flex-wrap">
      <div className="py-4">
        <div>
          <div>{aboutText}</div>
        </div>
        <div className="py-4">
          <div>{aboutText2}</div>
        </div>
        <div className="">
          <div>{aboutText3}</div>
        </div>
      </div>
      <div className="m-auto p-0 mt-0">
        <a href="#works">
          <img className="h-32 md:h-44 lg:h-52" src={arrow} alt="arrow down" />
        </a>
      </div>
    </div>
  );
};

export default About;
