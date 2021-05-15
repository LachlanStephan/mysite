import React from "react";
import person from "../../images/person.png";
import arrow from "../../images/downArrow.png";

// Declare props
interface Props {
  aboutText: string;
  aboutText2: string;
  aboutText3: string;
}

const About: React.FC<Props> = ({ aboutText, aboutText2, aboutText3 }) => {
  return (
    <div id="about" className="min-h-screen py-5 flex flex-wrap">
      <div className="py-5">
        <img className="h-4/5" src={person} alt="cartoon person" />
      </div>
      <div className="">
        <div className="py2">
          <div>{aboutText}</div>
        </div>
        <div className="py-2">
          <div>{aboutText2}</div>
        </div>
        <div className="py-2">
          <div>{aboutText3}</div>
        </div>
      </div>
      <div className="py-12 m-auto h-full">
        <a href="#works">
          <img className="h-4/5" src={arrow} alt="arrow down" />
        </a>
      </div>
    </div>
  );
};

export default About;
