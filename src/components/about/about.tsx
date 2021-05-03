import React from "react";

// Declare props
interface Props {
  aboutText: string;
  aboutText2: string;
  aboutText3: string;
}

const About: React.FC<Props> = ({ aboutText, aboutText2, aboutText3 }) => {
  return (
    <div id="about" className="h-auto lg:h-screen py-5 flex flex-wrap">
      <div className="w-screen md:w-1/2 lg:w-1/2">
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
      <div className="w-screen md:w-1/2 lg:w-1/2 flex"></div>
    </div>
  );
};

export default About;
